export default function Stats() {
  const statsData = [
    {
      value: "650M+",
      title: "Transactions on Testnet",
      description: "Enabling smarter, faster AI."
    },
    {
      value: "22M+",
      title: "Active Accounts",
      description: "Co-creating the future of Decentralized Ai."
    },
    {
      value: "808K+ ",
      title: "Testnet Validators",
      description: "securing ØG's modular L1 infrastructure."
    },
    {
      value: "infinity",
      title: "infinetly Scalable",
      description: "11k+ Peak TPS per shard."
    }
  ];

  return (
    <div className="display grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 grid-rows-[auto-gap] gap-0 border-b border-[#e5e5e5] place-items-center overflow-clip">
      {statsData.map((stat, index) => (
        <div key={index} className="border-t border-[#e5e5e5] border-r w-full h-full">
          <div className="px-[27px] py-[30px] lg:flex lg:items-center lg:gap-x-[120px]">
            {stat.value === "infinity" ? (
              <div className="text-4xl font-semibold lg:text-7xl md:text-6xl w-[200px] ">
                <img 
                  src="/inifinty.svg" 
                  alt="Infinity Icon" 
                  className="max-w-full inline-block align-middle border-0" 
                />
              </div>
            ) : (
              <h1 className="text-4xl font-semibold mb-3 lg:text-7xl md:text-6xl">
                {stat.value}
              </h1>
            )}
            <div className="flex flex-col">
              <div className="text-lg text-[#000] mb-2">
                {stat.title}
              </div>
              <div className="uppercase font-mono opacity-40 font-medium text-xs leading-[1.2] text-[#333]">
                {stat.description}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}