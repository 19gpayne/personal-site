import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

import navList from './navlist';

export const NavSide = styled.div`
    top: 0px;
    width: fit-content;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #388484;
    padding: 40px 30px;
    @media screen and (max-width: 1024px) {
        display: none;
    }
    @media only screen and (max-width: 1024px) and (min-height: 1024px) and (min-width: 640px) {
        display: flex;
        top: revert;
        bottom: 200px;
        left: 0;
        width: 100%;
        height: 100px;
        padding: 0;
        justify-content: center;
        align-items: center;
    }
    z-index: 2;
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
        text-decoration: underline;
    }
    text-align: center;
    padding-bottom: 5px;
    font-family: VT323;
    font-size: 20px;
    @media only screen and (max-width: 1024px) and (min-height: 1088px) and (min-width: 640px) {
        font-size: 30px;
    }
`;

export const Icon = styled.div`
    color: white;
    ${props => props.status !== 'active'} {
        font-weight: bold;
    }
    ${props => props.status !== 'inactive'} {
        font-weight: normal;
    }
    padding-top: 5px;
    cursor: pointer;
    & :hover {
        font-weight: bold;
    }
    font-size: 50px;
    text-align: center;
    @media only screen and (max-width: 1024px) and (min-height: 1024px) and (min-width: 640px) {
        padding: 0px 10px;
        font-size: 75px;
    }
`;

export const NavButton = styled.div`
    padding: 5px;
    @media only screen and (max-width: 1024px) and (min-height: 1024px) and (min-width: 640px) {
        display: inline;
    }
`;

const NavPrimarySide = () => (
    <NavSide>
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
    </NavSide>
);        

export default NavPrimarySide;