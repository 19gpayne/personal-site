import React from 'react';
import styled, {keyframes} from "styled-components";

import {CloseSquareFilled, MinusSquareFilled, FileImageFilled} from '@ant-design/icons';

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
    width: calc(100% - 500px);
    margin: 0px auto 15px 10%;
    border-radius: 1px;
    margin-top: 90px;
    position: relative;
    @media screen and (max-width: 1024px) {
        width: calc(100% - 200px);
        padding: 10px;
        margin: 0px auto 15px auto;
    }
    @media screen and (max-width: 640px) {
        width: calc(100% - 40px);
        margin-top: 20px;
        height: 80%;
    }
    z-index: 4;
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
    width: calc(100% - 243px);
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
    overflow: auto;
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

export const Wiki = styled.div`
    padding: 10px;
`;

export const Rectangle = styled.div`
    background-color: #d3d3d3;
    height: 40%;
    width: 100%;
`;


const MyComputer = () => (
    <Window>
        <ActionBar>
            <Inline><FileImageFilled/> GSN.com</Inline>
            <Action><ScreenSizeHidden><MinusSquareFilled/><CloseSquareFilled/></ScreenSizeHidden></Action> 
        </ActionBar>
        <br />
        <AddressBar>
            Address: www.about-me.net
        </AddressBar>
        <NameBox>
            <div style={{padding: '10px'}}>
                <Rectangle />
                Gwendolyn&nbsp;Payne
            </div>
            <div style={{fontSize: '20px', padding: '10px', borderLeft: '1px solid gray'}}>
                I am a third year student in the Honors program at Northeastern University, majoring in <b>Computer Science</b> with a 
                concentration in human-centered computing. I am passionate about using technology to help others and 
                facilitate accessibility. After graduation, I will use my experience with <b>fullstack development, information 
                technology, teaching, and mentoring</b> to become a well-rounded software engineer.
                <br />
                <br />
                In addition to being a full-time student, I am also working as a <b>teaching assistant</b> for the course 
                <i> Fundamentals of Software Engineering</i> and as a <b>junior developer</b> at Willow, a financial 
                technology startup. I am also involved in an on-campus club that promotes diversity in STEM, 
                First Byte. After a semester of active participation, I was selected to be the <b>Website Team Lead</b> for the club.
                <br />
                <br />
                When I am not coding, I can be found playing word games, listening to podcasts, or chasing my cat, Booger. 
            </div>
        </NameBox>
    </Window>
);

export default MyComputer