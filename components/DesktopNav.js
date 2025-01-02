import Link from "next/link";
import { usePathname } from "next/navigation";


function DesktopNav() {
    const pathname = usePathname();
    return (<nav>
        <ul className="nav-desktop flex-wrapper">
            <li className={pathname === "/" ? "nav-item curr" : "nav-item"}><Link href="/">home</Link></li>
            <li className={pathname === "/about" ? "nav-item curr" : "nav-item"} id="nav-about"><Link href="/about">about</Link></li>
            <li className={pathname === "/services" ? "nav-item curr" : "nav-item"} id="nav-services"><Link href="/services">services</Link></li>
            <li className={pathname === "/contact" ? "nav-item curr" : "nav-item"} id="nav-contact"><Link href="/contact">contact</Link></li>
        </ul>
    </nav>)
}

export default DesktopNav;