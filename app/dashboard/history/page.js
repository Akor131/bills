"use client"
import React from "react";
import { db } from "@/config/firebase.config";
import { getDoc, collection,orderBy, getDocs } from "firebase/firestore";
import { HistoryTab } from "@/components/HistoryTab";

export default function History() {
    const [loans,setLoans]= React.useState([]);

    React.useState(() => {
        const handleFetchLoans = async ()=> {
            const q = collection(db,"loans");
            const onsnap = await getDocs(q);

            const compileResults = [];

            onsnap.docs.forEach(doc => {
                compileResults.push({
                    id:doc.id,
                    data:doc.data()
                });

                setLoans(compileResults)
            })
        }
         handleFetchLoans()
    },[]);
    

    return(
        <main className="min-h-screen flex justify-center items-center bg-gradient-to-b from-pink-300 via-blue-400 via-sky-400 to-purple-500">
            <div className="w-[300px] min-h-[400px] bg-white rounded-md p-4">
                <h1 className="text-xl text-gray-800 mb-4">My Loan History</h1>
                <div className="flex flex-col gap-4">

                    {/* {<HistoryTab/>} */}

                    {loans.map(loan => <HistoryTab 
                    docId={loan.id}
                    amount={loan.data.amount} 
                    rate={loan.data.rate} 
                    duration={loan.data.duration} 
                    type="business"
                    date="11 MAY 2022"
                    key={loan}/>)}
                </div>
    
            </div>
        </main>
    )
}