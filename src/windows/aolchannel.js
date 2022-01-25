import React from 'react';
import styled, {keyframes} from "styled-components";

import {CloseSquareFilled, MinusSquareFilled, FileImageFilled, BgColorsOutlined, HighlightOutlined, ZoomInOutlined, ZoomOutOutlined, FontColorsOutlined, ScissorOutlined, DragOutlined, SearchOutlined, FullscreenOutlined, QuestionOutlined, BorderOutlined, LineOutlined, FontSizeOutlined, SnippetsOutlined} from '@ant-design/icons';

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
    width: calc(100% - 800px);
    margin: 0px auto 15px 10%;
    border-radius: 1px;
    position: absolute;
    right: 300px;
    top: 250px;
    @media screen and (max-width: 1200px) {
        width: calc(100% - 600px);
    }
    @media screen and (max-width: 1024px) {
        position: relative;
        width: calc(100% - 40px);
        padding: 10px;
        margin: 0px auto 15px auto;
        top: revert;
        right: revert;
    }
    @media screen and (max-width: 640px) {
        margin-top: 20px;
    }
    z-index: 1;
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
    width: calc(100% - 175px);
    text-align: right;
    z-index: 2;
    color: #d3d3d3;
`;

export const NameBox = styled.div`
    display: flex;
    // justify-content: center;
    // align-items: center;
    background-color: white;
    color: black;
    box-shadow: inset 2px 2px 2px rgb(0 0 0 / 50%);
    border-bottom: 2px solid #d9d9d9;
    border-right: 2px solid #d9d9d9;
    margin-top: 10px;
    // text-align: center;
    height: calc(100% - 100px);
    font-size: 30px;
    @media screen and (max-width: 460px) {
        font-size: 20px;
    }
    font-family: VT323;
    overflow: hidden;
`;

export const AddressBar = styled.div`
    padding: 5px;
    margin-top: 10px;
    background-color: white;
    color: black;
    text-align: left;
    z-index: 2;
    box-shadow: inset 2px 2px 2px rgb(0 0 0 / 50%);
    border-bottom: 2px solid #d9d9d9;
    border-right: 2px solid #d9d9d9;
`;


export const Inline = styled.div`
    display: inline;
`;

export const ScreenSizeHidden = styled.div`
    @media screen and (max-width: 460px) {
        display: none;
    }
`;

export const Dot = styled.td`
    background-color: #000;
    border-radius: 50%;
    display: inline-block;
`;

export const Square = styled.td`
    background-color: #000;
    display: inline-block;
`;

export const HeaderCell = styled.td`
    background-color: #d3d3d3;
    border-right: 2px solid black;
    border-top: 2px solid #dadada;
    border-left: 2px solid #dadada;
    border-bottom: 2px solid black;
    font-size: 20px;
    width: fit-content;
    text-align: center;
`;

export const ColorCell = styled.td`
    box-shadow: inset 2px 2px 2px rgb(0 0 0 / 40%);
    border-top: revert;
    border-left: revert;
    border-bottom: 2px solid #dbdbdb;
    border-right: 2px solid #dbdbdb;
`;

const iconList = [
    <BgColorsOutlined />,
    <HighlightOutlined />,
    <FontColorsOutlined />,
    <FontSizeOutlined />,
    <BorderOutlined />,
    <LineOutlined />,
    <Dot height='15px' width='15px'>&nbsp;</Dot>,
    <Dot height='10px' width='10px'>&nbsp;</Dot>,
    <Square height='15px' width='15px'>&nbsp;</Square>,
    <Square height='10px' width='10px'>&nbsp;</Square>,
    <ScissorOutlined />,
    <SnippetsOutlined />,
    <ZoomInOutlined />,
    <ZoomOutOutlined />,
    <DragOutlined />,
    <FullscreenOutlined />,
    <SearchOutlined />,
    <QuestionOutlined />,
]

const colorList = [
    "#FFF",
    "#bbb",
    "#FF0000",
    "#FF9900",
    "#FFFF00",
    "#00CC00",
    "#0033CC",
    "#660099",
    "#FFBF00",
    "#e45a36",
    "#FF00FF",
    "#8F00FF",
    "#008080",
    "#9fff3f"
]

const darkColorList = [
    "#000",
    "#555",
    "#4d0000",
    "#6d4100",
    "#9e9e04",
    "#014b01",
    "#001963",
    "#2b0141",
    "#694e00",
    "#592214",
    "#6b006b",
    "#33005b",
    "#003939",
    "#325312"
]


const Channel = () => (
    <Window>
        <ActionBar>
            <Inline><FileImageFilled/> untitled - Paint</Inline>
            <Action><ScreenSizeHidden><MinusSquareFilled/><CloseSquareFilled/></ScreenSizeHidden></Action> 
        </ActionBar>
        <div style={{display: 'inline-flex', width: '100%', height: 'calc(100% - 80px)'}}>
            <NameBox style={{width: '25%', display: 'block'}}>
                <table style={{width: '100%', height: '275px'}}>
                    <thead>
                        {iconList.map((e, i) => {
                            if (i % 2 === 0) {
                                return (
                                    <tr key={i}>
                                        <HeaderCell>{e}</HeaderCell>
                                        <HeaderCell>{iconList[i + 1]}</HeaderCell>
                                    </tr>
                                )
                            } else {
                                return null
                            }
                        })}
                    </thead>
                </table>
            </NameBox>
            <br />
            <br />
            <NameBox style={{width: '100%', height: '275px'}}>
                <img 
                    src="https://res.cloudinary.com/dou0q4ekk/image/upload/v1643048163/Screen_Shot_2022-01-24_at_1.05.41_PM_g66s3j.png" 
                    alt="Paint" 
                    style={{margin: '5px auto', objectFit: 'cover', padding: '0px 0px 30px 30px'}}
                />
            </NameBox>
        </div>
        <table style={{width: '100%'}}>
            <tbody>
                <tr>
                    {colorList.map((c, i) => {
                        return (
                            <ColorCell key={i} style={{backgroundColor: c}}>&nbsp;</ColorCell>
                        )
                    })
                    }
                </tr>
                <tr>
                    {darkColorList.map((c, i) => {
                        return (
                            <ColorCell key={i} style={{backgroundColor: c}}>&nbsp;</ColorCell>
                        )
                    })
                    }
                </tr>
            </tbody>
        </table>
    </Window>
);

export default Channel