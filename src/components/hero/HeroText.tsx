// HeroText.jsx
export default function HeroText() {
    return(
        <div className="flex flex-col gap-6 max-w-4xl mx-auto p-8">
            <div className="bg-[#b75fff26] opacity-100 rounded-full inline-flex items-center gap-2 px-4 py-2 self-start"> 
                <div className="w-2 h-2 bg-[#b75fff] rounded-full"></div>
                <div className="text-[#b75fff] font-semibold text-[10px]">DECENTRALIZED AI OPERATING SYSTEM</div>
            </div>
            <div className="text-black text-2xl md:text-4xl lg:text-5xl">
                Infinitely scalable. fully composable, and purpose-built to power <span className="text-[#b75fff]">the next generation</span> of AI applications.
            </div>
            <div className="lg:flex flex-start">
                <button className="px-6 py-3 mb-3 mr-5 bg-black text-white rounded-lg font-semibold">Explore ØG</button>
                <button className="px-6 py-3 bg-[#0000000d] border border-[#0003] text-black rounded-lg transition-all duration-300 font-semibold">Support ØG on X</button>
            </div>
        </div>
    )
}