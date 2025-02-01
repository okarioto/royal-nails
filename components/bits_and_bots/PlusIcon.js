export default function PlusIcon({isClicked, setIsClicked}) {



    return (
        <div onClick={() => { setIsClicked(!isClicked) }} className="flex items-center ml-1 mb-[-2px] cursor-pointer group">
            <div className={`w-[1rem] h-[0.1rem] mr-[-16px] bg-secondary-text  rounded-lg transform duration-700 group-hover:bg-black md:w-[1.5rem] md:h-[0.124rem] md:mr-[-24px] ${isClicked ? ' -rotate-[360deg]' : 'rotate-90'} `}></div>
            <div className={`w-[1rem] h-[0.1rem] bg-secondary-text  rounded-lg transform duration-500 group-hover:bg-black md:w-[1.5rem] md:h-[0.125rem] ${isClicked ? ' rotate-[180deg]' : 'rotate-0'}`}></div>
        </div>
    )
} 