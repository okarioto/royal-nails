import Image from "next/image";

function ExpandServiceBtn(props) {

    function clickHandler() {
        props.setIsOpen(!props.isOpen)
    }

    return (
        <>
           {!props.isOpen && (<span className="down-button-wrapper flex-wrapper">
                <button className="down-icon-button flex-wrapper" onClick={clickHandler}>
                    <Image className="down-icon-image" src="/icons/down-icon.svg" height={30} width={30} alt="down icon"></Image>
                </button>
            </span>)
}
           {props.isOpen && (<span className="cross-button-wrapper flex-wrapper">
                <button className="cross-icon-button flex-wrapper" onClick={clickHandler}>
                    <Image className="down-icon-image" src="/icons/cross-icon.svg" height={30} width={30} alt="cross icon"></Image>
                </button>
            </span>)}
        </>);
}

export default ExpandServiceBtn