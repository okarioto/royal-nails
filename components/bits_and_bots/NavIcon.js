export default function NavIcon({ isClicked, setIsClicked }) {



    return (
        <div onClick={() => { setIsClicked(!isClicked) }} className="cursor-pointer">
            <div className={`w-7 h-[0.2rem] bg-black mt-[0.3rem] mb-[0.3rem] rounded-lg duration-1000 ${isClicked && 'transform -rotate-[405deg] translate-y-[0.5rem]'}`}></div>
            <div className={`w-7 h-[0.2rem] bg-black mt-[0.3rem] mb-[0.3rem] rounded-lg duration-700 ${isClicked && 'opacity-0'}`}></div>
            <div className={`w-7 h-[0.2rem] bg-black mt-[0.3rem] mb-[0.3rem] rounded-lg duration-1000 ${isClicked && 'transform rotate-[45deg] translate-y-[-0.5rem]'}`}></div>
        </div>
    )
}