import { HistoryTab } from "@/components/HistoryTab"

const dummy = [1, 2, 3, 4];

export default function History() {
    return(
        <main className="min-h-screen flex justify-center items-center bg-gradient-to-b from-pink-300 via-blue-400 via-sky-400 to-purple-500">
            <div className="w-[300px] min-h-[400px] bg-white rounded-md p-4">
                <h1 className="text-xl text-gray-800 mb-4">My Loan History</h1>
                <div className="flex flex-col gap-4">

                    {/* {<HistoryTab/>} */}

                    {dummy.map(loan => <HistoryTab amount={"500,000"} rate={12.4} duration={52} type={"business"} date={"11 MAY 2022"}></HistoryTab>)}
                </div>
            </div>
        </main>
    )
}