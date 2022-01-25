import React from 'react';
import styled, {keyframes} from "styled-components";

import {CloseSquareFilled, MinusSquareFilled, FolderFilled} from '@ant-design/icons';
import res from './gpayneres.pdf'

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

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
    width: calc(100% - 400px);
    margin: 0px auto 15px auto;
    border-radius: 1px;
    margin-top: 100px;
    @media screen and (max-width: 1024px) {
        width: calc(100% - 40px);
        padding: 10px;
    }
    @media screen and (max-width: 640px) {
        margin-top: 20px;
        height: 400px;
    }
    z-index: 2;
    height: 500px;
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
    width: calc(100% - 275px);
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
    overflow-y: auto;
    .doc {
        height: 99%;
        width: 99%;
        margin: 10px;
        justify-content: center;
        display: flex;
        margin-top: 30px;
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

const Word = () => (
    <Window>
        <ActionBar>
            <Inline><FolderFilled/> Microsoft Word - Resume</Inline>
            <Action><ScreenSizeHidden><MinusSquareFilled/><CloseSquareFilled/></ScreenSizeHidden></Action> 
        </ActionBar>
        <NameBox>
            <Document
                file={res}
                onLoadSuccess={() => {}}
                onLoadError={console.error}
                className="doc"
            >
                <Page pageNumber={1} renderMode="svg" style={{width: '50%'}}/>
            </Document>
        </NameBox>
    </Window>
);

export default Word