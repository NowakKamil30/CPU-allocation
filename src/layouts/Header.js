import React from 'react';
import Nav from "./Nav";

const Header = ({title}) =>{
    return(
        <header className="header">
            <h1 className="header__title">
                {title}
            </h1>
            <Nav/>
        </header>
    )
}

export default Header;