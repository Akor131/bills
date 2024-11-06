"use client"
import React from "react";
import Link from "next/link";
import {FaGoogle} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import { signIn, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Auth () {
    const {data:session} = useSession();
    const router = useRouter();
    

    React.useEffect(() => {
        if (session?.user) {
            router.push("/dashboard/borrow")
        }
    },[session]);
    
    return (
        <main className="min-h-[520px] flex justify-center bg-gradient-to-b from-gray-50 to-gray-300 py-8 px-2">
            <article>
            <div className="w-full md:w-[24em] rounded-md bg-white p-4">
                <h1 className="text-2xl mb-2">Sign-in to bills</h1>
                <p className="text-sm text-gray-600 mb-4">sign-in using...</p>

            
            <form 
            action= { ()=> {
                signIn("google")
            }}
            className="mb-2">
                <button type="submit" className="w-full h-[3.2em] flex justify-center items-center gap-2 border-b-2 border-red-500 bg-black rounded-md">
                    <FaGoogle className="text-green-500 text-2xl"/>
                    <span className="text-white text-lg">Google account</span>
                </button>
            </form>
            <form className="mb-2">
                <button type="submit" className="w-full h-[3.2em] flex justify-center items-center gap-2 border-b-2 border-gray-500 bg-black rounded-md">
                    <FaXTwitter className="text-white text-2xl"/>
                    <span className="text-white text-lg">Twitter account</span>
                </button>
            </form>

            <p className="text-gray-500 text-sm">By clicking the sign-in button, you confirm that you have read and agreed with our <Link href="#" className="text-gray-800 underline">Terms of use</Link> and <Link href="#" className="text-gray-800 underline">Privacy policy</Link> </p>
            </div>
            </article>
        </main>
    )
}