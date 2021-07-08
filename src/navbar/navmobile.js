import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

import navList from './navlist';

export const NavMenu = styled.div`
    @media screen and (min-width: 1024px) {
        display: none !important;
    }
    ${props => props.status !== true} {
        display: block;
    }
    ${props => props.status !== false} {display: none;}
    padding: 30px 30px 0px 30px;
    background-color: blue
    @media screen and (max-width: 460px) {
        padding: 30px 15px 0px 15px;
    }
    border-bottom: 1px solid blue;
`;

export const Button = styled.div`
    color: white;
    ${props => props.status !== 'active'} {
        font-weight: bold;
    }
    ${props => props.status !== 'inactive'} {
        font-weight: normal;
    }
    padding: 5px 0px;
    cursor: pointer;
    & :hover {
        font-weight: bold;
    }
    text-align: center;
`;

export const Icon = styled.div`
    color: white;
    ${props => props.status !== 'active'} {
        font-weight: bold;
    }
    ${props => props.status !== 'inactive'} {
        font-weight: normal;
    }
    padding: 5px 0px;
    cursor: pointer;
    & :hover {
        font-weight: bold;
    }
    font-size: 44px;
    text-align: center;
`;

export const NavButton = styled.div`
    padding: 5px;
`;

const NavMobile = () => (
    <NavMenu>
        {navList.main.map((d, i) => {
            let status = "inactive";
            if(window.location.pathname.split("/")[1] === d.href.split("/")[1]) {
                status = "active"
            }
            return(
                <NavButton key={i}>
                    <Link to={d.href} style={{ textDecoration: 'none' }}>
                        <Icon>{d.icon}</Icon>
                        <Button status={status}>
                            <p>{d.label}</p>
                        </Button>
                    </Link>
                </NavButton>
            )
        })}
    </NavMenu>
);        

export default NavMobile;