
import Nav from "./Nav";

function Header() {


    return (
        <div className="header-wrapper flex-wrapper">
            <header className="header">
                <div className="logo-wrapper">RoyalNails</div>
                <div className="flex-wrapper">
                   <Nav />
                </div>
            </header>
        </div>);
}

export default Header;