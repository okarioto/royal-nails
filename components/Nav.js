// 'use client'
import Link from "next/link";
// import { usePathname } from "next/navigation";


function Nav(){
    // const pathname = usePathname();
    const pathname = false;
    return (<nav>
        <ul className="nav flex-wrapper">
            <li className={pathname==="/" ? "nav-item curr": "nav-item"}><Link href="/">home</Link></li>
            <li className={pathname === "/about" ? "nav-item curr" : "nav-item"} id="nav-about"><a href="/about">about</a></li>
            <li className={pathname === "/services" ? "nav-item curr" : "nav-item"} id="nav-services"><a href="/services">services</a></li>
            <li className={pathname === "/contact" ? "nav-item curr" : "nav-item"} id="nav-contact"><a href="/contact">contact</a></li>
        </ul>
    </nav>)
}

export default Nav;