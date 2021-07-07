import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

import navList from './navlist';

export const NavSide = styled.div`
    top: 0px;
    width: 190px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #388484;
    padding: 40px 30px;
    @media screen and (max-width: 1088px) {
        display: none;
    }
`;

export const Button = styled.div`
    ${props => props.status !== 'active'} {
        color: white;
        background-color: blue;
    }
    ${props => props.status !== 'inactive'} {
        color: black;
    }
    padding: 5px 0px;
    cursor: pointer;
    & :hover {
        color: white;
        background-color: blue;
    }
`;

const NavPrimarySide = () => (
    <NavSide>
        {/* <p>Test</p> */}
        {navList.main.map((d, index) => {
            let status = "inactive";
            if(window.location.pathname.split("/")[1] === d.href.split("/")[1]) {
                status = "active"
            }
            return(
                <Link to={d.href}>
                    <Button status={status}>
                        <p>{d.label}</p>
                    </Button>
                </Link>
            )
        })}
    </NavSide>
);        

export default NavPrimarySide;