'use client'
import { useState, useRef, useEffect } from "react"
import MenuItem from "@/app/components/MenuItem"
import PlusIcon from "@/app/components/PlusIcon"


export default function MenuCard({ title, items }) {
    const [menuIsDown, setMenuIsDown] = useState(true);
    const divRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (divRef.current) {
            setHeight(divRef.current.offsetHeight + 100);
        }
    }, []);

    return (
        <div id={title} className={`flex justify-center w-[80%] mt-5 mb-5 p-3 bg-background rounded-3xl overflow-hidden h-[5rem] md:h-[6rem]`} style={{
            height: menuIsDown && `${height}px`,
            transitionDuration: `${height * 2.5}ms`
        }}>
            <div className="flex flex-col w-[90%] mt-3">
                <div className="flex w-full justify-between mb-5">
                    <h3 className="font-title tracking-[0.50rem] text-[22px] capitalize md:text-[32px]">{title}</h3>
                    <PlusIcon isClicked={menuIsDown} setIsClicked={setMenuIsDown} />
                </div>
                <div ref={divRef}>
                    {items.map((item, idx) => { return <MenuItem key={idx} name={item.name} price={item.price} /> })}
                </div>
            </div>
        </div>)
}