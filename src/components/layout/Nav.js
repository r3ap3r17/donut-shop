import NavLogo from "../../assets/donuts-logo.svg";
import NavItems from "../NavItems";
import React, { useState, useEffect } from 'react';
import NavButton from "../NavButton";

function Nav() {
    const [button, setButton] = useState(false);
    const [active, setActive] = useState(false);
    const activeHandler = () => { setActive(!active) }

    const showButton = () => {
        if (window.innerWidth <= 576) {
            setButton(true)
        } else {
            setButton(false)
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <nav>
            <img className="logo" src={ NavLogo } alt=""></img>
            { button ? <NavButton activeHandler={ activeHandler } active={ active } /> : <NavItems /> }
            <div className={ (active & button) ? "nav-responsive active" : "nav-responsive" }>
                <NavItems />
            </div>
        </nav>
    );
}

export default Nav;