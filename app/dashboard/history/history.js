"use client"
import React from "react";
import { db } from "@/config/firebase.config";
import { collection,orderBy, getDocs, where } from "firebase/firestore";
import { HistoryTab } from "@/components/HistoryTab";
import { useSession } from "next-auth/react";

export default function History({userId}) {
    const [loans,setLoans]= React.useState([]);
    const {data:session} = useSession();

    React.useEffect(() => {
        const handleFetchLoans = async ()=> {
            const q = collection(db,"loans");
            const onsnap = await getDocs(q,
                where("user","==",userId),
                orderBy("timecreated", "desc")
        );

            const compileResult = [];

            onsnap.docs.forEach(doc => {
                compileResult.push({
                    id:doc.id,
                    data:doc.data()
                });

                setLoans(compileResult)
            })
        }
         session ? handleFetchLoans() : null;
    },[session]);
    
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
                    timestamp={loan.data.timecreated}
                    type="business"
                    key={loan}/>)}
                </div>
            </div>
        </main>
    )
}