'use client'
import {useRef, useEffect, useState} from "react"
import MenuCard from "@/components/bits_and_bots/MenuCard"
import full_menu from "@/utils/menu.js"



export default function Services() {
        const img1Ref = useRef();

        const img2Ref = useRef();
        const [img1IsInView, setImg1IsInView] = useState(false)

        const [img2IsInView, setImg2IsInView] = useState(false)
    
        useEffect(() => {
            function observerCallBack(entries) {
                entries.forEach((entry) => {
                    if(entry.target == img1Ref.current) setImg1IsInView(entry.isIntersecting);

                    if(entry.target == img2Ref.current) setImg2IsInView(entry.isIntersecting);
                })
            }
    
            const observer = new IntersectionObserver(observerCallBack, { threshold: 0.5 });
            if (img1Ref.current) { observer.observe(img1Ref.current); }

            if (img2Ref.current) { observer.observe(img2Ref.current); }
            return () => { observer.disconnect(); };
        }, []);
    
    return (
        <div id="services" className="flex-1 flex justify-center items-center mt-10 mb-32">
            <div className="flex items-center justify-center w-[90%] ">
                <div className="flex flex-col xl:grid xl:grid-cols-5 gap-10 w-full">
                    <div className="flex flex-col items-center col-span-3">
                        <h1 className="font-title text-center tracking-[0.5rem] text-[24px]  md:text-[48px] md:tracking-[1.2rem] mr-3 ml-5">Services  </h1>
                        {full_menu.map((menu_item, idx) => {
                            return <MenuCard key={idx} title={menu_item.title} items={menu_item.items} blurb={menu_item.blurb} />
                        })}
                        <p className="w-[90%] font-subtitle text-secondary-text text-[10px] tracking-tighter text-center md:text-[14px] mb-10">please be aware prices are subject to change depending on complexity</p>
                    </div>
                    <div className="flex flex-col md:flex-row xl:flex-col items-center justify-evenly col-span-2 ">
                        <img ref={img1Ref} src="/images/threeLotion.jpg" alt="" className="mt-10 mb-10 w-[20rem] md:w-[20rem] md:mb-0 md:mt-0.5 md:h-[25rem] xl:h-auto xl:w-[30rem] xl:mt-10 duration-700"
                        style={{borderRadius: img1IsInView? "5%":"30%",
                            opacity: img1IsInView ? "1" : "0.4"
                        }}/>
                        <img ref={img2Ref} src="/images/creamSmear2.jpg" alt="" className="w-[20rem] md:w-[20rem] md:h-[25rem] xl:h-auto xl:w-[30rem] duration-700 object-contain"
                            style={{ borderRadius: img2IsInView ? "5%" : "30%",
                                opacity: img2IsInView ? "1" : "0.4"
                            }} />
                    </div>
                </div>
            </div>
        </div>)
}