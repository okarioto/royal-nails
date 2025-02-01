'use client'
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import NavIcon from "@/components/bits_and_bots/NavIcon";





export default function Header() {
    const [navIsDown, setNavIsDown] = useState(false);
    const navRef = useRef(null);
    const [navHeight, setNavHeight] = useState(0);


    useEffect(() => {
        setNavHeight(navRef.current.offsetHeight)
    }, [navIsDown])

    function closeNav() {
        setNavIsDown(false);
    }

    return (
        <>
            <div className="flex justify-center items-center h-[5rem] bg-background">
                <div className="flex justify-between items-center w-[80%]">
                    <Link href={"/"}> <img src="/images/logo.png" className="h-[2rem] md:h-[3rem]" /></Link>


                    {/* moile nav btn */}
                    <span className="md:hidden"><NavIcon isClicked={navIsDown} setIsClicked={setNavIsDown} /></span>
                    {/* end moile nav btn */}

                    {/* desktop nav */}
                    <ul ref={navRef} className="hidden md:flex justify-end">
                        <li onClick={closeNav} className="font-subtitle text-[14px] tracking-[0.3rem] font-bold text-secondary-text hover:text-black mr-4 h-[23px] overflow-hidden">
                            <Link href={"/"} className="group flex flex-col mr-4 h-[23px] overflow-hidden">
                                <p className="group-hover:-translate-y-[63px] duration-700">Home</p>
                                <p className="group-hover:-translate-y-[63px] duration-700">Home</p>
                                <p className="group-hover:-translate-y-[63px] duration-700">Home</p>
                                <p className="group-hover:-translate-y-[63px] duration-700">Home</p>
                            </Link>

                        </li>
                        <li onClick={closeNav} className="font-subtitle text-[14px] tracking-[0.3rem] font-bold text-secondary-text hover:text-black mr-4 h-[23px] overflow-hidden">
                            <Link href={"/#hours"} className="group flex flex-col mr-4 h-[23px] overflow-hidden">
                                <p className="group-hover:-translate-y-[63px] duration-700">Hours</p>
                                <p className="group-hover:-translate-y-[63px] duration-700">Hours</p>
                                <p className="group-hover:-translate-y-[63px] duration-700">Hours</p>
                                <p className="group-hover:-translate-y-[63px] duration-700">Hours</p>
                            </Link>

                        </li>
                        <li onClick={closeNav} className="font-subtitle text-[14px] tracking-[0.3rem] font-bold text-secondary-text hover:text-black mr-4 h-[23px] overflow-hidden">
                            <Link href={"/#services"} className="group flex flex-col mr-4 h-[23px] overflow-hidden">
                                <p className="group-hover:-translate-y-[63px] duration-700">Services</p>
                                <p className="group-hover:-translate-y-[63px] duration-700">Services</p>
                                <p className="group-hover:-translate-y-[63px] duration-700">Services</p>
                                <p className="group-hover:-translate-y-[63px] duration-700">Services</p>
                            </Link>

                        </li>
                        <li onClick={closeNav} className="font-subtitle text-[14px] tracking-[0.3rem] font-bold text-secondary-text hover:text-black mr-4 h-[23px] overflow-hidden">
                            <Link href={"/gallery"} className="group flex flex-col mr-4 h-[23px] overflow-hidden">
                                <p className="group-hover:-translate-y-[63px] duration-700">Gallery</p>
                                <p className="group-hover:-translate-y-[63px] duration-700">Gallery</p>
                                <p className="group-hover:-translate-y-[63px] duration-700">Gallery</p>
                                <p className="group-hover:-translate-y-[63px] duration-700">Gallery</p>
                            </Link>

                        </li>


                    </ul>
                    {/* end desktop nav */}

                </div>


            </div>

            {/* mobile nav */}
            <div className={`flex items-center justify-center bg-background overflow-hidden w-full rounded-b-3xl  duration-700 md:hidden`} style={{
                height: navIsDown ? `${navHeight}px` : '0px',
            }}>
                <ul ref={navRef} className="flex flex-col w-[80%] items-end pb-5 pt-5">
                    <li onClick={closeNav} className="font-subtitle text-[12px] tracking-[0.3rem] font-bold text-secondary-text hover:text-black mb-3">
                        <Link href={"/"}>Home</Link> </li>

                    <li onClick={closeNav} className="flex flex-col font-subtitle text-[12px] tracking-[0.3rem] font-bold text-secondary-text hover:text-black mb-3" >
                        <Link href={"/#hours"} >Hours</Link>
                    </li>
                    <li onClick={closeNav} className="flex flex-col font-subtitle text-[12px] tracking-[0.3rem] font-bold text-secondary-text hover:text-black mb-3" >
                        <Link href={"/#services"} >Services</Link>
                    </li>
                    <li onClick={closeNav} className="font-subtitle text-[12px] tracking-[0.3rem] font-bold text-secondary-text hover:text-black">
                        <Link href={"/gallery"}>Gallery</Link> </li>
                </ul>
            </div>
            {/* end mobile nav */}





        </>);
}