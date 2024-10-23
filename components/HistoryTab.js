export function HistoryTab({amount, rate, duration, date, type}) {
    return(
        <div className="flex flex-col border border-blue-100 rounded-md p-3">
            <ul className="flex justify-between border-b border-blue-100 pb-2">
            <li className="font-bold text-2xl text-gray-700">N{amount}</li>
            <li className="text-xs text-blue-500 p-2">{rate}%</li>
            </ul>
            <ul className="pt-2 flex justify-between items-center">
            <li className="text-sm text-gray-700">{duration} Days</li>
            <li className="text-sm text-gray-700">{date}</li>
            <li className="text-sm text-gray-700">{type}</li>
            </ul>
        </div>
    )
}