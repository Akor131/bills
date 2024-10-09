export default function AboutUs () {
    return (
        <div className="bg-gray-200 md:px8 lg:px-16">
            <div className="py-[30px] md:px-[200px] lg:px-[250px]">
            <h1 className="font-bold text-4xl mb-3">ABOUT SMART VISION PROPERTIES</h1>
            <p><span className="text-blue-500 font-bold italic text-2xl">SV</span> Properties is a leading Real Estate company in Abuja that is focused on providing  Top-notch client-driven services within and outside Abuja. Our services include but not limited to Property management, consultation services, Sales and leasing of properties for residential and commercial purposes</p>
            </div>
            <div className="mt-5 md:px-[50px] lg:px-[100px] ml-[58px]">
                <h1 className="font-bold text-3xl mb-3 italic">OUR MISSION</h1>
                <p>To become the largest real estate company in Africa and beyond, providing stress-free and efficient services that exceeds our client expectations. With an extensive, cutting-edge technology and innovative thinking, we strive to deliver maximum services and make clients experience exceptional.</p>
            </div>
            <h1 className="font-bold text-3xl my-8 text-center">OUR SERVICES</h1>
            <div className="grid grid-cols-1 sm:m-8 md:grid-cols-3 md:gap-[58px] md:m-10 lg:grid-cols-3 lg:gap-[90px]">
                <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReztOW5GIRQWQGDXTODACup-bSCtAKxrYVMQ&s" className="h-[250px] w-[250px] object-cover rounded-full" alt=""></img>
                <h2 className="font-semibold my-2 text-cent">Sales and Lease of Properties</h2>
                <p className="mb-8">We sell and rent properties for residential and commercial purposes</p>
                </div>
                <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ-lf5wbB4V5zi507_HzzadzQoO_q3fEpZvg&s" className="h-[250px] w-[250px] object-cover rounded-full" alt=""></img>
                <h2 className="font-semibold my-2 ">Consultation Services</h2>
                <p className="mb-8">We provide consultation services for potential and actual investors</p>
                </div>
                <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcOAhAtY_GH5EpWmgqbxBskL-ax1m7tj_Ssg&s" className="h-[250px] w-[250px] object-cover rounded-full" alt=""></img>
                <h2 className="font-semibold my-2">Property Management</h2>
                <p className="mb-8">We have seasoned professionals who are dedicated to keeping track of our client properties for managerial purposes.</p>
                </div>
            </div>
            <h1 className="font-bold text-3xl my-8 text-center">OUR RECORDS</h1>
            <div className="grid grid-cols-1 sm:m-8 md:grid-cols-3 md:gap-[58px] md:m-10 lg:grid-cols-3 lg:gap-[90px]">
                <div className="bg-gray-500 rounded-xl my-5">
                <h2 className="text-2xl m-2">Over</h2>
                <p className="font-bold text-6xl m-3 italic">850</p>
                <p className="text-xl m-2">Properties sold and rented</p>
                </div>
                <div className="bg-gray-500 rounded-xl my-5">
                <h2 className="text-2xl m-2">Over</h2>
                <p className="font-bold text-6xl m-3 italic">95%</p>
                <p className="text-xl m-2">Customer Satisfaction</p>
                </div>
                <div className="bg-gray-500 rounded-xl my-5">
                <h2 className="text-2xl m-2">More than</h2>
                <p className="font-bold text-6xl m-3 italic">100</p>
                <p className="text-xl m-2">Properties being Managed</p>
                </div>
            </div>

        </div>
    )
}