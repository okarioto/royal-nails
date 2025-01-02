import Image from "next/image";
function NavBtn(props){
    function clickHandler(){
        props.setIsOpen(!props.isOpen);
    }

    return (
<>
    {!props.isOpen && (<div className="hamburger-icon-wrapper flex-wrapper nav-mobile">
        <button className="hamburger-icon-button flex-wrapper" onClick={clickHandler}>
            <Image className="hamburger-icon-image" src="/icons/hamburger-icon.svg" height={30} width={30} alt="hamburger menu"></Image>
        </button>
    </div> )}

   { props.isOpen && (<div className="nav-icon-wrapper flex-wrapper nav-mobile">
        <button className="cross-icon-button flex-wrapper" onClick={clickHandler}>
            <Image className="cross-icon-image" src="/icons/cross-icon.svg" height={30} width={30} alt="cross menu"></Image>
        </button>
    </div> )}

        </>
    
);
}

export default NavBtn;