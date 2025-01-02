import Link from "next/link";
import { usePathname } from "next/navigation";


function MobileNav(props) {
    const pathname = usePathname();

    function handleClick(){
        props.setIsOpen(!props.isOpen);
    }
    return (
        <div className={`nav-mobile nav-mobile-items-wrapper flex-wrapper ${props.isOpen? 'expand':''}`}>
            <nav className="nav-mobile-nav">
                <ul className="flex-wrapper nav-mobile-list">
                    <li className={pathname === "/" ? "nav-item curr" : "nav-item"} onClick={handleClick}><Link href="/">home</Link></li>
                    <li className={pathname === "/about" ? "nav-item curr" : "nav-item"} id="nav-about" onClick={handleClick}><Link href="/about">about</Link></li>
                    <li className={pathname === "/services" ? "nav-item curr" : "nav-item"} id="nav-services" onClick={handleClick}><Link href="/services">services</Link></li>
                    <li className={pathname === "/contact" ? "nav-item curr" : "nav-item"} id="nav-contact" onClick={handleClick}><Link href="/contact">contact</Link></li>
                </ul>
            </nav>
        </div>)

}

export default MobileNav;