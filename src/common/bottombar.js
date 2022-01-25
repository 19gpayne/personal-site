import React from 'react';
import styled from "styled-components";

import {AppstoreFilled} from '@ant-design/icons';

const Window = styled.div`
    background-color: #d3d3d3;
    box-shadow: 0px -5px 5px 0px rgba(0, 0, 0, 0.2);
    width: 100%;
    border-radius: 1px;
    z-index: 11;
    position: fixed;
    bottom: 0;
    left: 0;
`;

const ActionBar = styled.div`
    padding: 10px;
    background-color: #d3d3d3;
    color: black;
    text-align: left;
    @media screen and (max-width: 1024px) {
        padding: 10px;
    }
    z-index: 2;
`;

const Inline = styled.div`
    display: inline;
    padding: 5px;
    font-family: VT323;
    font-size: 20px;
    ${props => props.active !== true} {
        box-shadow: inset 2px 2px 2px rgb(0 0 0 / 40%);
        border-top: revert;
        border-left: revert;
        border-bottom: 2px solid #dbdbdb;
        border-right: 2px solid #dbdbdb;
    }
    ${props => props.active !== false} {
        box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.2);
        border-right: 2px solid gray;
        border-top: 2px solid #dadada;
        border-left: 2px solid #dadada;
        border-bottom: 2px solid gray;
    }
    @media screen and (max-width: 1024px) {
        cursor: pointer;
    }
`;

const InlineTab = styled.div`
    display: inline-flex;
    padding: 5px;
    box-shadow: inset 2px 2px 2px rgb(0 0 0 / 40%);
    border-bottom: 2px solid #d9d9d9;
    border-right: 2px solid #d9d9d9;
    font-family: VT323;
    font-size: 20px;
    width: 175px;
    background-color: #dddddd;
`;

const BottomBar = ({setMobileActive, active, tabNames}) => (
    <Window>
        <ActionBar>
            <Inline active={active} onClick={() => {return setMobileActive(!active)}}><AppstoreFilled/> Start</Inline>
            &nbsp;&nbsp;&nbsp;
            {tabNames.map((t, i) => {
                return (
                    <InlineTab key={i}>&nbsp;{t}</InlineTab>
                )
            })}
        </ActionBar>
    </Window>
);

export default BottomBar