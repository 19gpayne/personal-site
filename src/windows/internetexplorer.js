import React from 'react';
import styled from "styled-components";

import {FileImageFilled} from '@ant-design/icons';

import { expand, WindowHeaderBar } from './windowsstyledcomponents';

const Window = styled.div`
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

const NameBox = styled.div`
    display: flex;
    background-color: white;
    color: black;
    box-shadow: inset 2px 2px 2px rgb(0 0 0 / 50%);
    border-bottom: 2px solid #d9d9d9;
    border-right: 2px solid #d9d9d9;
    margin-top: 10px;
    height: calc(100% - 100px);
    font-size: 30px;
    @media screen and (max-width: 460px) {
        font-size: 20px;
    }
    font-family: VT323;
    overflow: auto;
`;

const AddressBar = styled.div`
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

const Rectangle = styled.div`
    background-color: #d3d3d3;
    height: 40%;
    width: 100%;
`;


const MyComputer = () => (
    <Window>
        <WindowHeaderBar label={<><FileImageFilled/> GSN.com</>}/>
        <br />
        <AddressBar>
            Address: www.about-me.net
        </AddressBar>
        <NameBox>
            <div style={{padding: '10px'}}>
                <Rectangle />
                Gwendolyn&nbsp;Payne
                <br />
                <div style={{fontSize: '20px'}}>
                    <a href="https://asset.cloudinary.com/dou0q4ekk/e2aeb305f04d0b9ba98997a2a446621b" target="_blank" rel="noreferrer">Click here for resume!</a>
                </div>
            </div>
            <div style={{fontSize: '20px', padding: '10px', borderLeft: '1px solid gray'}}>
                I am an alumni of the honors program at Northeastern University, having majored in <b>Computer Science</b> with a 
                concentration in human-centered computing. I am passionate about using technology to help others and 
                facilitate accessibility. <br /><br />

                I'm currently working as a software development engineer at <a href="https://amazon.jobs/en/teams/amazon-robotics" target="_blank" rel="noreferrer">Amazon Robotics</a>.
                I'm leading an initiative to integrate a more ergonomic handheld scanner into our put-to-light palletization technology. This project
                has been piloted at 7 sites so far, resulting in a significant lift in efficiency and reduction in injuries. 
                I also launched a new metadata sharing API to optimize sort allocations. Built using AWS API Gateway and Lambda, it is projected
                to deliver double digit millions in savings over 3 years.
                <br/><br />

                When I am not coding, I can be found going to spin class, going camping, building a crossword, or chasing my cat, Booger. 
            </div>
        </NameBox>
    </Window>
);

export default MyComputer
