export default function Stats () {
    return (
        <>
        <div className="display grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 grid-rows-[auto-gap] gap-0 border-b border-[#e5e5e5] place-items-center overflow-clip">
        <div className="border-t border-[#e5e5e5] border-r w-full h-full">
        <div className="px-[24px] py-[18px] lg:flex lg:items-center lg:justify-around">
            <h1 className="text-4xl font-semibold mb-3 lg:text-7xl md:text-6xl">650M+</h1>
            <div className="flex flex-col">
                <div className="text-lg text-[#000] leading-[1.4] mb-2">Transactions on Testnet</div>
               <div className="uppercase font-mono opacity-40 font-medium text-xs leading-[1.2] text-[#333]">Enabling smarter, faster AI.

               </div>
            </div>



        </div>
        </div>
          <div className="border-t border-[#e5e5e5] border-r w-full h-full">
        <div className="px-[24px] py-[18px] lg:flex lg:items-center lg:justify-between">
            <h1 className="text-4xl font-semibold mb-3 lg:text-7xl md:text-6xl">22M+</h1>
            <div className="flex flex-col">
                <div className="text-lg text-[#000] leading-[1.4] mb-2">Active Accounts</div>
               <div className="uppercase font-mono opacity-40 font-medium text-xs leading-[1.2] text-[#333]">Co-creating the future of Decentralized Ai.
                
               </div>
            </div>



        </div>
        </div>
         <div className="border-t border-[#e5e5e5] border-r w-full h-full">
        <div className="px-[24px] py-[18px] lg:flex lg:items-center lg:justify-between">
            <h1 className="text-4xl font-semibold mb-3 lg:text-7xl md:text-6xl">8K+</h1>
            <div className="flex flex-col">
                <div className="text-lg text-[#000] leading-[1.4] mb-2">Testnet Validators</div>
               <div className="uppercase font-mono opacity-40 font-medium text-xs leading-[1.2] text-[#333]">securing ØG's modular L1 infrastructure.
                
               </div>
            </div>



        </div>
        </div>
         <div className="border-t border-[#e5e5e5] border-r w-full h-full">
        <div className="px-[24px] py-[18px] lg:flex lg:items-center lg:justify-between">
            <div className="text-4xl font-semibold mb-3 lg:text-7xl md:text-6xl w-[100px] ">
                <img src="/inifinty.svg" alt="Infinity Icon" className="max-w-full inline-block align-middle border-0" />
            </div>
            <div className="flex flex-col">
                <div className="text-lg text-[#000] leading-[1.4] mb-2">infinetly Scalable</div>
               <div className="uppercase font-mono opacity-40 font-medium text-xs leading-[1.2] text-[#333]">11k+ Peak TPS per shard.
                
               </div>
            </div>



        </div>
        </div>

        </div>
        
        </>
    )
}