"use client"
import React from "react";
import { useRouter } from "next/navigation";
import { AppContext } from "@/config/context.config";
import { db } from "@/config/firebase.config";
import { doc,getDoc,updateDoc,addDoc,collection } from "firebase/firestore";
import { Skeleton } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@mui/material";
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { sumFromArray } from "@/utils/sum_from_array";

const schema = yup.object().shape({
    amount:yup.number().required().min(1),
});

export default function LoanDetails({user}) {
    const {loanDocId} = React.useContext(AppContext)
    const [loan,setLoan]= React.useState(null);
    const [offSets, setOffsets]= React.useState([]);
    const [totaloffSets, setTotalOffsets]= React.useState(0);
    const [validateAmount, setValidationAmount] = React.useState(false);

    const router = useRouter();

    React.useEffect(() => {
        if (loanDocId=== null) {
            router.push("/dashboard/history")
        }
    },[]);
    
     React.useEffect(() => {
            const handleDocFetch = async () => {
            const docRef = doc ( db, "loans", loanDocId);
            const res = await getDoc(docRef);

            if (res.exists()) {
                setLoan(res.data())
            } 
            else {
                alert ("Invalid request ID")
            }
        }
        //call the function to execute
        handleDocFetch()
    },[]);

//retrieve loan offset
    React.useEffect(() => {
        loan !== null ? setOffsets(loan.offSets) : null;
        loan ?.offSets ? setTotalOffsets(sumFromArray(loan?.offSets)) : null;
    },[loan]);
    
    const { handleSubmit, handleChange, touched, errors, values} = useFormik({
        initialValues: {amount:undefined},
        onSubmit: ()=> {
            // console.log(values.amount);
            setValidationAmount(true);
        },
        validationSchema:schema
    });

    //re-validate amount so that flutterwave payment is not initiated with empty figures
    React.useEffect(() => {
        if (validateAmount) {
            setValidationAmount(false)    
        }
    },[values.amount])

    //>>> FLUTTERWAVE COMPONENT>>
    const config = {
        public_key: "FLWPUBK_TEST-07eb955aba643e63f3c057bd00d016ff-X",
        tx_ref: Date.now(),
        amount: Math.round(values.amount),
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: user?.email,
          phone_number: '0708888897',
          name: user?.name,
        },
        customizations: {
          title: 'Loan repayment',
          description: 'Payment of loan or make an installment',
          logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
      };

      const fwConfig = {
        ...config,
        text: 'Make payment!',
        callback: async (response) => {
           const docId = await addDoc(collection(db,"payments"),{
                amount:response.amount,
                responseCode: response.charge_response_code,
                currency: response.currency,
                flwRef: response.flw_ref,
                txRef: response.tx_ref,
                status: response.status,
                user: user.id,
                loanId: loanDocId,
                timeCreated: new Date().getTime()
            })
            
            const reLoanOffSets = offSets;
            reLoanOffSets.push({
                amount:values.amount,
                paymentDocId:docId.id
            })
            await updateDoc(doc(db,"loans",loanDocId),{
                offSets: reLoanOffSets
            });
        
          closePaymentModal() // this will close the modal programmatically
        },
        onClose: () => {},
      };
      
    //>>> FLUTTERWAVE COMPONENT>>

    return(
        <main className="min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-50 via-gray-100 via-gray-200 to-gray-300 py-16">
            <div className="w-[300px] min-h-[400px] bg-white rounded-md p-4">
                <h1 className="text-xl text-gray-800 mb-4">Loan Details</h1>
                
                { loan !== null ?
                <div className="flex flex-col gap-4">
                    <ul className="grid grid-cols-2 pb-3 mb-3 border-b border-gray-100">
                        <li className="text-lg text-gray-700 uppercase">Amount</li>
                        <li className="text-lg text-gray-700 text-end">₦{loan.amount}</li>
                    </ul>
                    <ul className="grid grid-cols-2 pb-3 mb-3 border-b border-gray-100">
                        <li className="text-lg text-gray-700 uppercase">Payback amount</li>
                        <li className="text-lg text-gray-700 text-end">₦{loan.payback}</li>
                    </ul>
                    <ul className="grid grid-cols-2 pb-3 mb-3 border-b border-gray-100">
                        <li className="text-lg text-gray-700 uppercase">Duration</li>
                        <li className="text-lg text-gray-700 text-end">{loan.days} days</li>
                    </ul>
                    <ul className="grid grid-cols-2 pb-3 mb-3 border-b border-gray-100">
                        <li className="text-lg text-gray-700 uppercase">Rate</li>
                        <li className="text-lg text-gray-700 text-end">{loan.rate}%</li>
                    </ul>
                    <ul className="grid grid-cols-2 pb-3 mb-3 border-b border-gray-100">
                        <li className="text-lg text-gray-700 uppercase">Due Date</li>
                        <li className="text-lg text-gray-700 text-end">{}</li>
                    </ul>
                    <ul className="grid grid-cols-2 pb-3 mb-3 border-b border-gray-100">
                        <li className="text-lg text-gray-700 uppercase">Total offsets</li>
                        <li className="text-lg text-gray-700 text-end">
                            ₦{totaloffSets}
                        </li>
                    </ul>

                    <form 
                    onSubmit={handleSubmit} 
                    style={{display: totaloffSets >= loan.payback ? "none" : "block"}}
                    className="bg-gray-200 p-4 rounded-md">

                        <div className="flex flex-col gap-1 mb-2">
                            <label className="text-xs text-gray-700">Offset this loan</label>
                            <TextField
                            type="number"
                            id="amount"
                            label="amount"
                            value={values.amount}
                            onChange={handleChange}/>
                            {touched.amount && errors.amount ? <span className="text-xs text-red-500">{errors.amount}</span> : null}
                        </div>

                        <div className="flex items-center gap-3">
                        <Button type="submit" color="error" variant="outlined">VALIDATE AMOUNT</Button>
                        {validateAmount ? <FlutterWaveButton {...fwConfig} className="bg-green-600 rounded-md px-2 py-1 text-white" /> : null }
                        </div>
                    </form>
                </div>
                :
                <div className="flex flex-col gap-4">
                    <Skeleton variant="rectangular" className="w-full h-14 rounded-md"/>
                    <Skeleton variant="rectangular" className="w-full h-14 rounded-md"/>
                    <Skeleton variant="rectangular" className="w-full h-14 rounded-md"/>
                </div>
                }
            </div>
        </main>
    )
}