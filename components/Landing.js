'use client'
import { useRef, useState, useEffect } from "react";


export default function Landing() {
    const bigImgRef = useRef();
    const [bigIsInview, setBigIsInView] = useState(false)


    useEffect(() => {
        function observerCallBack(entries) {
            entries.forEach((entry) => {
                setBigIsInView(entry.isIntersecting);
            })
        }

        const observer = new IntersectionObserver(observerCallBack, { threshold: 0.3 });
        if (bigImgRef.current) { observer.observe(bigImgRef.current); }
        return () => { observer.disconnect(); };
    }, []);


    return (
        <div className="flex-1">
            <div className="flex w-full items-center justify-center  mt-10 mb-10">
                <div ref={bigImgRef} className="relative flex w-[90%] items-center justify-center">
                    <img src={"/images/liquidPipette.jpg"} alt="" className="object-cover min-h-[30rem] max-h-[50rem] w-full duration-1000"
                        style={{
                            borderRadius: bigIsInview ? '5%' : '40%',
                        }} />
                        
                    <div className="absolute top-0 h-full flex items-center justify-center flex-col duration-1000 delay-200 bg-white bg-opacity-30 lg:bg-opacity-0 lg:items-end lg:justify-start lg:top-10 lg:right-16"
                        style={{ opacity: bigIsInview ? "1" : "0" }}>
                        <h1 className="font-title text-[24px] md:text-[53px] text-center tracking-[1rem]">ROYAL NAILS</h1>
                        <p className="font-subtitle text-[18px] md:text-[1.5rem] traking-[0.5rem] text-justify w-[90%] lg:max-w-[50rem]"> Established in 2001, Royal Nails is a family run salon with over 1000 gel colours where you're sure to find the perfect colour! At Royal Nails, we use only Single-Use Foot Tub Liners to keep our service completely sanitary and health-conscious. We are pleased to offer free customer parking at the rear of our shop, in the lane way just south of West Broadway.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
