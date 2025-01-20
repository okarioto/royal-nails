export default function DownIconSm({isClicked, setIsClicked}) {



    return (
        <div onClick={() => { setIsClicked(!isClicked) }} className="flex items-center ml-1 mb-[-2px] cursor-pointer group">
            <div className={`w-[0.5rem] h-[0.1rem] mr-[-3px] bg-secondary-text  rounded-lg transform duration-500 group-hover:bg-black ${isClicked ? ' -rotate-[225deg]' : 'rotate-45'} `}></div>
            <div className={`w-[0.5rem] h-[0.1rem] bg-secondary-text  rounded-lg transform duration-500 group-hover:bg-black ${isClicked ? ' rotate-[225deg]' : ' -rotate-45'} `}></div>
        </div>
    )
} 