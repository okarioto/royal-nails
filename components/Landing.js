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
                            opacity: bigIsInview ? '1' : '0.4'
                        }} />
                        
                    <div className="absolute top-0 h-full flex items-center justify-center flex-col duration-1000 delay-200 bg-white bg-opacity-30 lg:bg-opacity-0 lg:items-end lg:justify-start lg:top-10 lg:right-16"
                        style={{ opacity: bigIsInview ? "1" : "0" }}>
                        <h1 className="font-title text-[24px] md:text-[53px] text-center tracking-[1rem]">ROYAL NAILS</h1>
                        <p className="font-subtitle text-[18px] md:text-[1.5rem] traking-[0.5rem] text-justify w-[90%] lg:max-w-[50rem]">Welcome to Royal Nails, where beauty and relaxation have been our passion for over 20 years. With expert nail care, luxurious spa treatments, and a commitment to excellence, we’ve built a trusted reputation for quality service. Visit us today and experience the difference of decades of expertise in every detail.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
