"use client"
import React from "react"
import { db } from "@/config/firebase.config"

export default function History() {
    const [loan,setLoan]= React.useState({});

    React.useState(() => {
        
    },[]);
    
    return(
        <main className="min-h-screen flex justify-center items-center bg-gradient-to-b from-pink-300 via-blue-400 via-sky-400 to-purple-500">
            <div className="w-[300px] min-h-[400px] bg-white rounded-md p-4">
                <h1 className="text-xl text-gray-800 mb-4">Loan Details</h1>
                <div className="flex flex-col gap-4">

                </div>
            </div>
        </main>
    )
}