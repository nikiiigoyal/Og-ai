export default function Header () {
    return (
        <>
        <div className="flex w-full z-50 fixed items-center mt-4">
            <div className="flex mx-auto items-center">
            <div className="flex bg-[#00000026] backdrop-blur-lg  rounded-[24px] mx-auto w-fit px-3 items-center">
                <div className="w-[90px] h-[70px] text-white pr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 50 24" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
<path d="M50.0009 12.6136C49.6855 18.9497 44.3897 23.9913 37.9033 23.9913C31.214 23.9913 25.791 18.6291 25.791 12.0146C25.791 5.40009 31.214 0.0380859 37.9033 0.0380859C44.1841 0.0380859 49.3483 4.76491 49.956 10.8171H44.4555C43.8858 7.75086 41.169 5.42761 37.9035 5.42761C34.2241 5.42761 31.2416 8.37672 31.2416 12.0146C31.2416 15.6527 34.2241 18.6018 37.9035 18.6018C40.7281 18.6018 43.1418 16.8636 44.111 14.4101H34.8753V12.6136H50.0009Z" fill="currentColor"></path>
<path d="M3.98642 20.8584C8.74078 25.1181 16.0905 24.9803 20.6772 20.4453C25.4072 15.7681 25.4072 8.18505 20.6772 3.50781C15.9469 -1.16927 8.27782 -1.16927 3.54764 3.50781C-0.893505 7.8992 -1.16488 14.8521 2.73348 19.5567L6.62297 15.7108C4.83311 13.1445 5.09269 9.60205 7.40183 7.31886C10.0034 4.7464 14.2215 4.7464 16.8231 7.31886C19.4245 9.89129 19.4245 14.062 16.8231 16.6345C14.8257 18.6094 11.8757 19.0682 9.43583 18.0106L15.9665 11.5531L14.6819 10.2829L3.98642 20.8584Z" fill="currentColor"></path>
</svg>
                </div>
                <div className="flex justify-evenly items-center">

                    <a href="/research" className="text-lg text-[#fff] pr-4">Research</a>
                    <div className="relative group">
                     <a href="/Learn" className="text-lg text-[#fff] pr-4">Learn</a>
                     <div className="absolute top-full hidden group-hover:block left-1/2 mt-3 bg-[#fff] backdrop-blur-md text-sm  border border-[#e5e5e5] text-[#000] transform translate-x/12 opacity-0 transition-all duration-300 hover:translate-y-0 hover:opacity-100">
                     <div className="py-1 ">
                       
            <a href="/learn/product" className="block px-4 py-2 hover:bg-[b75fff] ">Product</a>
            <a href="/learn/blog" className="block px-4 py-2 ">Blog</a>
             <a href="/learn/faqs" className="block px-4 py-2 ">FAQs</a>
              <a href="/learn/contactus" className="block px-4 py-2 ">Contact us</a>
               <a href="/learn/whitepaper" className="block px-4 py-2 ">Whitepaper</a>

                     </div>
                     </div>
                     </div>
                      <a href="/build" className="text-lg text-[#fff] pr-4">Build</a>
                       <a href="/ecosystem" className="text-lg text-[#fff] pr-4">ecosystem</a>
            <a>
                <button className="bg-[#fff] text-black p-3 rounded-xl">Docs</button>
            </a>
                </div>
  </div>
          
            <div className="ml-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bell-icon lucide-bell"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>
            </div>

            

</div>
        </div>
         
        </>
    )
}