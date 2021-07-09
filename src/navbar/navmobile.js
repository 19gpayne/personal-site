import React from 'react';
import { Link } from 'react-router-dom';

import navList from './navlist';
import {RightOutlined} from '@ant-design/icons';
import {MobileMenu, MobileIcon, NavButton, SideBarGray} from './navstyledcomponents';

const NavMobile = ({active}) => (
    <>
        <SideBarGray status={active}/>
        <MobileMenu status={active}>
            {navList.main.map((d, i) => {
                let status = "inactive";
                if(window.location.pathname.split("/")[1] === d.href.split("/")[1]) {
                    status = "active"
                }
                return(
                    <NavButton key={i}>
                        <Link to={d.href} style={{ textDecoration: 'none' }}>
                            <MobileIcon status={status}>{d.icon} {d.label} <RightOutlined/></MobileIcon>
                        </Link>
                    </NavButton>
                )
            })}
        </MobileMenu>
    </>
);        

export default NavMobile;