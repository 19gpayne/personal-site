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
    @media screen and (max-width: 1088px) {
        display: none;
    }
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