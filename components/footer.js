import Link from "next/link";
import { FaXTwitter, FaYoutube, FaTiktok } from "react-icons/fa6";

const year = new Date().getFullYear();

export function Footer () {
    return (
        <footer className="grid grid-cols-1 gap-4 lg:gap-0 lg:grid-cols-3 py-4 md:px-8 lg:16">
            <div>
                <p className="text-2xl text-gray-800 font-bold">Bills Limited</p>
                <p className="text-xs text-gray-600">&copy; {year} Bills Limited</p>
            </div>

            <div>
                <p className="text-md text-gray-700 font-semibold">Head Office</p>
                <p className="text-md text-gray-700">72 ladoke street, Mararaba, Nasarawa State</p>
            </div>
            
            <div>
                <ul className="flex lg:justify-end items-center gap-4">
                    <li><Link href="#"><FaXTwitter className="text-md"/></Link></li>
                    <li><Link href="#"><FaYoutube className="text-md"/></Link></li>
                    <li><Link href="#"><FaTiktok className="text-md"/></Link></li>
                </ul>
                <ul className="flex lg:
                justify-end items-center gap-4">
                    <li><Link href="#" className="text-sm text-gray-500">Terms of use</Link></li>
                    <li><Link href="#" className="text-sm text-gray-500">Privacy policy</Link></li>
                    <li><Link href="#" className="text-sm text-gray-500">Bug bounty</Link></li>
                </ul>
            </div>
        </footer>
    )
}