'use client'
import { useRef, useState, useEffect } from "react";

export default function HoursCard(){

        const imgRef = useRef();
        const [isInView, setIsInView] = useState(false)
    
    
        useEffect(() => {
            function observerCallBack(entries) {
                entries.forEach((entry) => {
                    setIsInView(entry.isIntersecting);
                })
            }
    
            const observer = new IntersectionObserver(observerCallBack, { threshold:0.5 });
            if (imgRef.current) { observer.observe(imgRef.current); }
            return () => { observer.disconnect(); };
        }, []);
    return (
        <div ref={imgRef} className="flex justify-center items-center w-full  border-r-[1px] border-l-[1px] border-black  overflow-hidden duration-1000 "
        style={{borderRadius: isInView? "10%":"50%"}}>
            <div className="flex flex-col w-[80%] mt-4 mb-5 justify-center items-start duration-1000 delay-200"
            style={{opacity: isInView? "1": "0"}}>
                <h3 className="font-title tracking-[0.5rem] text-[26px] md:text-[34px] md:mt-7">Hours</h3>

                <div className="flex justify-between w-full mb-2 md:mb-10 md:mt-3">
                    <h4 className="font-subtitle text-[14px] md:text-[20px]">Weekdays </h4>
                    <h4 className="font-subtitle text-[14px] md:text-[20px] md:hidden">10AM - 7PM </h4>
                    <h4 className="hidden font-subtitle text-[18px] md:text-[20px] md:block">10:00AM - 07:00PM </h4>
                </div>

                <div className="flex justify-between w-full mt-2 mb-2 md:mb-10">
                    <h4 className="font-subtitle text-[14px] md:text-[20px]">Saturday </h4>
                    <h4 className="font-subtitle text-[14px] md:text-[20px] md:hidden">10AM - 6PM </h4>
                    <h4 className="hidden font-subtitle text-[18px] md:text-[20px] md:block">10:00AM - 06:00PM </h4>
                </div>

                <div className="flex justify-between w-full mt-2 md:mb-10">
                    <h4 className="font-subtitle tracking-tighter text-[14px] md:text-[20px]">Sunday & Holidays </h4>
                    <h4 className="font-subtitle text-[14px] md:text-[20px] md:hidden">11AM - 6PM </h4>
                    <h4 className="hidden font-subtitle text-[18px] md:text-[20px] md:block">11:00AM - 06:00PM </h4>
                </div>

            </div>
        </div>
    )
}