export default function Hero () {
    return (
        <>
        <div className="relative h-screen flex flex-col justify-end z-10 pb-20 w-full px-10">
            <div className="flex justify-between w-full items-end">
                 <h1>
                <div className="flex items-center ">
                   <div className="text-4xl text-[#fff] mr-5 lg:text-8xl font-semibold"  >ØG.AI</div>
                    <div className="flex items-center">
                     <div className="text-7xl text-[#fff] mr-4">(  </div>
                      <div className="text-sm text-[#fff] text-center">Zero 
                        <br />
                         Gravity</div>
                       <div className="text-7xl text-[#fff] ml-4"> )</div>
                       </div>
                      </div>
                <div className="text-[#fff] text-3xl lg:text-8xl font-semibold"> The Largest AI L1</div>
                 </h1>
         
            <div className="buttons flex items-center gap-3">
                 
                   <button className="bg-[#fff] px-5 text-black py-3 font-semibold rounded-xl hover:bg-[#cb8aff] hover:opacity-45 transform transition-bg duration-300">Docs</button>
                 
                 
                    <button className="py-3 px-5 rounded-xl font-semibold bg-[#ffffff1a] text-[#fff] border border-[#fff6] hover:bg-[#3a1e73] hover:opacity-70 transform transition-bg duration-300" >Learn More</button>
                 
            </div>
               </div>
        </div>
        </>
    )
}