export default function Header () {
    return (
        <>
        <div className="flex w-full z-50 fixed items-center mx-auto">
            <div className="bg-[#00000026] border border-[e1e1e11a] rounded-[24px] mx-auto w-fit p-4">
                <div></div>
                <div className="flex justify-evenly items-center">
                    <a href="/research" className="text-sm text-[#fff] pr-4">Research</a>
                     <a href="/Learn" className="text-sm text-[#fff] pr-4">Learn</a>
                      <a href="/build" className="text-sm text-[#fff] pr-4">Build</a>
                       <a href="/ecosystem" className="text-sm text-[#fff] pr-4">ecosystem</a>
            <a>
                <button className="bg-[#fff] text-black p-3 rounded-xl">Docs</button>
            </a>
                </div>

            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bell-icon lucide-bell"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>
            </div>
        </div>
        </>
    )
}