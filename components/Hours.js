'use client'
import { useRef, useState, useEffect } from "react";
import HoursCard from "@/components/bits_and_bots/HoursCard";


export default function Hours() {
    const imgRef = useRef();
    const [isInView, setIsInView] = useState(false)


    useEffect(() => {
        function observerCallBack(entries) {
            entries.forEach((entry) => {
                setIsInView(entry.isIntersecting);
            })
        }

        const observer = new IntersectionObserver(observerCallBack, { threshold: 0.3 });
        if (imgRef.current) { observer.observe(imgRef.current); }
        return () => { observer.disconnect(); };
    }, []);


    return (
        <div id="hours" className="flex-1">
            <div className="flex flex-col md:flex-row md:justify-around w-full items-center justify-center  mt-10 mb-10">
                <div className="w-[80%] md:max-w-[30rem] md:order-2 md:w-[50%] mb-5">
                    <HoursCard />
                </div>
                <img ref={imgRef} src="/images/lotionCreamSwab.jpg" alt="" className="object-cover w-[90%] h-[30rem] rounded-xl md:w-[40%] lg:w-[50%] md:h-[40rem] lg:h-[50rem] duration-1000 mt-5"
                 style={{borderRadius: isInView? '5%': "30%",
                     opacity: isInView ? "1" : "0.4"
                 }}/>

            </div>
        </div>
    );
}
