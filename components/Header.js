
'use client'
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import NavBtn from "./NavBtn";
import Link from "next/link";
import { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="header-content">
            <div className="header-wrapper flex-wrapper">
                <header className="header flex-wrapper">
                    <div className="logo-wrapper"><Link className="logo" href="/">RoyalNails</Link></div>
                    <div className="flex-wrapper nav-desktop">
                        <DesktopNav />
                    </div>
                    <NavBtn
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}

                    />
                </header>
            </div>
            <MobileNav
                isOpen={isOpen}
                setIsOpen={setIsOpen} />
        </div>);
}

export default Header;