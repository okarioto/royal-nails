'use client'
import { useState, useRef, useEffect } from "react"
import MenuItem from "@/components/bits_and_bots/MenuItem"
import PlusIcon from "@/components/bits_and_bots/PlusIcon"


export default function MenuCard({ title, items, blurb }) {
    const [menuIsDown, setMenuIsDown] = useState(false);
    const expandRef = useRef(null);
    const baseRef = useRef(null)
    const [expandHeight, setExpandHeight] = useState(0);
    const [baseHeight, setBaseHeight] = useState(0);

    useEffect(() => {
        function handleResize() {
            if (baseRef.current) {setBaseHeight(baseRef.current.offsetHeight)}
            if (expandRef.current) { setExpandHeight(expandRef.current.scrollHeight + baseHeight); }
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => { window.removeEventListener("resize", handleResize) }
    }, [menuIsDown])


    const itemRef = useRef();
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        function observerCallBack(entries) {
            entries.forEach((entry) => {
                setIsInView(entry.isIntersecting);
            })
        }

        const observer = new IntersectionObserver(observerCallBack, { threshold: 0.4 });
        if (itemRef.current) { observer.observe(itemRef.current); }
        return () => { observer.disconnect(); };
    }, []);

    return (
        <div id={title} ref={itemRef} className={`flex justify-center w-full mt-5 mb-5 p-3 border-b-[1px] border-t-[1px] border-slate-500 overflow-hidden duration-[1000ms]`} style={{
            height: menuIsDown ? `${expandHeight+50}px` : `${baseHeight + 30}px`,
            borderRadius: isInView ? '1rem' : `50%`,
        }}>
            <div className="flex flex-col w-[90%] mt-3 duration-[1000ms] delay-200"
                style={{
                    opacity: isInView ? `100` : `0`,
                }}>
                <div ref={baseRef}>
                    <div className="flex w-full justify-between mb-1">
                        <h3 className="font-title tracking-[0.50rem] text-[22px] capitalize md:text-[32px]">{title}</h3>
                        <PlusIcon isClicked={menuIsDown} setIsClicked={setMenuIsDown} />
                    </div>
                    <div className="mb-5">
                        <p className="font-subtitle text-[16px] md:text-[20px] ">{blurb}</p>
                    </div>
                </div>

                <div ref={expandRef}>
                    {items.map((item, idx) => { return <MenuItem key={idx} name={item.name} price={item.price} /> })}
                </div>
            </div>
        </div>)
}