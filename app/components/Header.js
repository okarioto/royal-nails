'use client'
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import NavIcon from "./NavIcon";





export default function Header() {
    const [navIsDown, setNavIsDown] = useState(false);
    const [servicesIsDown, setServicesIsDown] = useState(false);
    const navRef = useRef(null);
    const [navHeight, setNavHeight] = useState(0);


    useEffect(() => {
        !navIsDown && setServicesIsDown(false);
        if (servicesIsDown) {
            setNavHeight(270)
        } else {
            setNavHeight(110)
        }

    }, [navIsDown, servicesIsDown])

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
                            <Link href={"/services"} className="group flex flex-col mr-4 h-[23px] overflow-hidden">
                                <p className="group-hover:-translate-y-[63px] duration-700">Services</p>
                                <p className="group-hover:-translate-y-[63px] duration-700">Services</p>
                                <p className="group-hover:-translate-y-[63px] duration-700">Services</p>
                                <p className="group-hover:-translate-y-[63px] duration-700">Services</p>
                            </Link>

                        </li>
                        <li onClick={closeNav} className="font-subtitle text-[14px] tracking-[0.3rem] font-bold text-secondary-text hover:text-black mr-4 h-[23px] overflow-hidden">
                            <Link href={"/contact"} className="group flex flex-col mr-4 h-[23px] overflow-hidden">
                                <p className="group-hover:-translate-y-[63px] duration-700">Contact</p>
                                <p className="group-hover:-translate-y-[63px] duration-700">Contact</p>
                                <p className="group-hover:-translate-y-[63px] duration-700">Contact</p>
                                <p className="group-hover:-translate-y-[63px] duration-700">Contact</p>
                            </Link>

                        </li>


                    </ul>
                    {/* end desktop nav */}

                </div>


            </div>

            {/* mobile nav */}
            <div className={`flex items-center justify-center bg-background w-full rounded-b-3xl overflow-hidden duration-700 md:hidden`} style={{
                height: navIsDown ? `${navHeight}px` : '0px',
            }}>
                <ul ref={navRef} className="flex flex-col w-[80%] items-end mb-5">
                    <li onClick={closeNav} className="font-subtitle text-[12px] tracking-[0.3rem] font-bold text-secondary-text hover:text-black mb-3"><Link href={"/"}>Home</Link> </li>

                    <li onClick={closeNav} className="flex flex-col font-subtitle text-[12px] tracking-[0.3rem] font-bold text-secondary-text hover:text-black mb-3" ><div className="flex"><Link href={"/services"} >Services</Link></div>
                    </li>


                    <li onClick={closeNav} className="font-subtitle text-[12px] tracking-[0.3rem] font-bold text-secondary-text hover:text-black"><Link href={"/contact"}>Contact</Link> </li>
                </ul>
            </div>
            {/* end mobile nav */}





        </>);
}