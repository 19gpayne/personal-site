import React from 'react';
import styled, {keyframes} from "styled-components";

import {CloseSquareFilled, MinusSquareFilled, FolderFilled} from '@ant-design/icons';

const expand = keyframes`
  from {
    transform: scale(0.01, 0.01);
  }
  to {
    transform: scale(1, 1);
  }
`;

export const Window = styled.div`
    padding: 10px;
    background-color: #d3d3d3;
    width: fit-content;
    border-radius: 1px;
    position: absolute;
    right: 50px;
    top: 50px;
    @media screen and (max-width: 1024px) {
        padding: 10px;
        position: absolute;
        top: revert;
        bottom: 100px;
        right: 20px;
    }
    @media screen and (max-width: 640px) {
        display: none;
    }
    z-index: 3;
    height: fit-content;
    border-right: 2px solid black;
    border-top: 2px solid #dadada;
    border-left: 2px solid #dadada;
    border-bottom: 2px solid black;
    box-shadow: 3px 3px 8px 0px rgb(0 0 0 / 20%);
    animation-name: ${expand};
    animation-duration: 1s;
    animation-iteration-count: 1;
    transform-origin: 0% 100%;
    font-family: Share Tech Mono;
    width: 25%;
`;

export const ActionBar = styled.div`
    padding: 5px;
    background-color: #0c1c6c;
    color: white;
    text-align: left;
    width: calc(100% - 10px);
    @media screen and (max-width: 1024px) {
        padding: 10px;
        width: calc(100% - 20px);
    }
    z-index: 2;
    display: inline-flex;
    
    justify-content: space-between;
`;

export const Action = styled.div`
    display: inline-block;
    vertical-align: bottom;
    text-align: right;
    z-index: 2;
    color: #d3d3d3;
`;

export const NameBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: black;
    box-shadow: inset 2px 2px 2px rgb(0 0 0 / 50%);
    border-bottom: 2px solid #d9d9d9;
    border-right: 2px solid #d9d9d9;
    margin-top: 10px;
    width: 100%;
    text-align: center;
    height: calc(100% - 80px);
    font-size: 80px;
    @media screen and (max-width: 460px) {
        font-size: 50px;
    }
    font-family: VT323;
`;


export const Inline = styled.div`
    display: inline;
`;

export const ScreenSizeHidden = styled.div`
    @media screen and (max-width: 460px) {
        display: none;
    }
`;

const Solitaire = () => (
    <Window>
        <ActionBar>
            <Inline><FolderFilled/> Solitaire</Inline>
            <Action><ScreenSizeHidden><MinusSquareFilled/><CloseSquareFilled/></ScreenSizeHidden></Action> 
        </ActionBar>
        <img src="https://res.cloudinary.com/dou0q4ekk/image/upload/v1643122730/Screen_Shot_2022-01-25_at_9.58.27_AM_wmzil4.png" alt="Solitaire" width='100%'/>
    </Window>
);

export default Solitaire