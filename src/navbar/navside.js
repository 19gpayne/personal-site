import React from 'react';
import { Link } from 'react-router-dom';

import navList from './navlist';
import {NavSide, DesktopIcon, NavButton, Label} from './navstyledcomponents';

const NavDesktop = () => (
    <NavSide>
        {navList.main.map((d, i) => {
            let status = "inactive";
            if(window.location.pathname.split("/")[1] === d.href.split("/")[1]) {
                status = "active"
            }
            return(
                <NavButton key={i}>
                    <Link to={d.href} style={{ textDecoration: 'none' }}>
                        <DesktopIcon>{d.icon}</DesktopIcon>
                        <Label status={status}>
                            <p>{d.label}</p>
                        </Label>
                    </Link>
                </NavButton>
            )
        })}
    </NavSide>
);        

export default NavDesktop;