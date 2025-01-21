export default function MenuItem({ name, price }) {
    return (
        <div className="flex justify-between items-center w-full mb-5 border-b border-black">
            <p className="font-subtitle text-[12px] md:text-[18px]  w-[60%] tracking-[0.1rem] font-semibold text-secondary-text u">{
                name.split('\n').map((line, index) => (
                    <span key={index} className={`${index===1 && ' text-[10px] md:text-[15px] font-thin tracking-tighter'}`}>
                        {line}
                        <br />
                    </span>
                ))
            }</p>
            <p className="font-subtitle text-[12px] md:text-[18px] font-semibold text-secondary-text">{price}</p>
        </div>
    )

}