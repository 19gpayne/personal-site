import React from 'react';
import styled from "styled-components";

import {CloseSquareFilled, MinusSquareFilled, FolderFilled} from '@ant-design/icons';

export const Window = styled.div`
    padding: 10px;
    background-color: #d3d3d3;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.6);
    width: calc(100% - 500px);
    color: blue;
    margin: 0px auto 15px auto;
    border-radius: 1px;
    margin-top: 100px;
    @media screen and (max-width: 1088px) {
        width: calc(100% - 40px);
        padding: 10px;
    }
    @media screen and (max-width: 460px) {
        margin-top: 20px;
    }
    z-index: 2;
    height: 500px;
`;

export const ActionBar = styled.div`
    padding: 5px;
    background-color: navy;
    color: white;
    text-align: left;
    @media screen and (max-width: 1088px) {
        padding: 10px;
    }
    z-index: 2;
`;

export const Action = styled.div`
    display: inline-block;
    vertical-align: bottom;
    width: calc(100% - 290px);
    text-align: right;
    z-index: 2;
`;

export const NameBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: black;
    box-shadow: inset 2px 2px 2px rgb(0 0 0 / 50%);
    margin-top: 10px;
    width: 100%;
    text-align: center;
    height: calc(100% - 80px);
    font-size: xxx-large;
    @media screen and (max-width: 460px) {
        height: calc(100% - 150px);
        font-size: xx-large;
    }
`;


export const Inline = styled.div`
    display: inline;
`;

export const ScreenSizeHidden = styled.div`
    @media screen and (max-width: 460px) {
        display: none;
    }
`;

const PopUpWindow = () => (
    <Window>
        <ActionBar>
            <Inline><FolderFilled/> C:\\GWINDOWS\DESKTOP\MyWebsite</Inline>
            <Action><ScreenSizeHidden><MinusSquareFilled/><CloseSquareFilled/></ScreenSizeHidden></Action> 
        </ActionBar>
        <NameBox>GWENDOLYN PAYNE</NameBox>
    </Window>
);

export default PopUpWindow