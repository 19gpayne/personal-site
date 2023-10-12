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
            </div>
            <div style={{fontSize: '20px', padding: '10px', borderLeft: '1px solid gray'}}>
                I am a fifth year student in the Honors program at Northeastern University, majoring in <b>Computer Science</b> with a 
                concentration in human-centered computing. I am passionate about using technology to help others and 
                facilitate accessibility. <br /><br />
                In addition to being a student, I am currently working as a lead <b>front-end developer</b>
                at <a href="https://www.tadpoletutoring.org">Tadpole Tutoring</a>, a tutoring software startup. I am currently
                leading a team of 2 to add a new scheduling and payroll system. <br /><br />
                I have also completed three co-ops, each as a full-stack developer.<br /><br />
                My first co-op was at <a href="https://www.trustwillow.com">Willow</a>, a fintech startup focusing on making financial advising more accessible
                to women and the new majority. I worked on creating a document sharing vault, video conferencing system,
                and redesigned and implemented the coaching dashboard homepage. These were completed using 
                React and Django.<br /><br />
                My second co-op was at <a href="https://www.reprise.com">Reprise</a>, a demo software company, where I used Vue and Django. I worked on various visual redesigns, as well as
                adding additional security measures, such as password security measures and fixing URL redirection vulnerabilities.<br /><br />
                My final co-op was at <a href="https://amazon.jobs/en/teams/amazon-robotics">Amazon Robotics</a> where I worked on the direct to palletize team. I worked on integrating
                a new hand scanner into our palletization software, mainly using Java. This project was piloted at 3 sites, 
                where associate feedback was overwhelmingly positive and effiency increased by 15%.<br /><br />
                When I am not coding, I can be found going to spin class, going camping, or chasing my cat, Booger. 
            </div>
        </NameBox>
    </Window>
);

export default MyComputer
