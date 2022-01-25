import React from 'react';
import styled from "styled-components";

import { GithubFilled, LinkedinFilled, MailFilled, PhoneFilled, SearchOutlined } from '@ant-design/icons';

const Window = styled.div`
    padding: 10px;
    background-color: #d3d3d3;
    width: 15%;
    border-radius: 1px;
    position: absolute;
    right: 50px;
    position: absolute;
    margin-top: auto;
    margin-bottom: auto;
    top: 0;
    bottom: 0;
    text-align: center;
    height: 80%;
    @media screen and (max-width: 1200px) {
        width: 20%;
    }
    @media screen and (max-width: 1024px) {
        height: fit-content;
        width: calc(100% - 40px);
        margin: 0px auto 15px auto;
        padding: 10px;
        position: relative;
        right: revert;
        top: revert;
    }
    @media screen and (max-width: 640px) {
        margin-top: 20px;
    }
    z-index: 3;
    border-right: 2px solid black;
    border-top: 2px solid #dadada;
    border-left: 2px solid #dadada;
    border-bottom: 2px solid black;
    box-shadow: 3px 3px 8px 0px rgb(0 0 0 / 20%);
    font-family: Share Tech Mono;
`;

const NameBox = styled.div`
    background-color: black;
    color: #f2f2f2;
    box-shadow: inset 2px 2px 2px rgb(0 0 0 / 50%);
    border-bottom: 2px solid #d9d9d9;
    border-right: 2px solid #d9d9d9;
    margin-top: 10px;
    width: 100%;
    height: calc(100% - 20px);
    font-size: 30px;
    @media screen and (max-width: 1024px) {
        padding-bottom: 10px;
        font-size: 50px;
    }
    font-family: Ubuntu;
    text-align: left;
`;

const LinkName = styled.p`
    font-family: Ubuntu;
    color: #f2f2f2;
    padding: 30px 10px 5px 10px;
    display: flex;
    justify-content: space-between;
`;

const ContactItem = styled.p`
    padding-left: 10px;
    font-size: 10px;
    @media screen and (max-width: 1024px) {
        font-size: 20px;
    }
`;

const LinkItem = styled.a`
    color: #f2f2f2;
`;

const Guide = () => (
    <Window>
        <NameBox>
            <LinkName style={{borderBottom: '1px solid white'}}>Channel Guide <SearchOutlined style={{color: '#3146f5'}}/></LinkName>
            <LinkName>LinkedIn <LinkedinFilled style={{color: '#3146f5'}}/></LinkName>
            <ContactItem><LinkItem href='https://www.linkedin.com/in/gwen-payne' target="_blank" rel="noreferrer">https://www.linkedin.com/in/gwen-payne</LinkItem></ContactItem>
            <br />
            <LinkName>GitHub <GithubFilled style={{color: '#3146f5'}}/></LinkName>
            <ContactItem><LinkItem href='https://github.com/19gpayne' target="_blank" rel="noreferrer">https://github.com/19gpayne</LinkItem></ContactItem>
            <br />
            <LinkName>Email <MailFilled style={{color: '#3146f5'}}/></LinkName>
            <ContactItem>payne.gw@northeastern.edu</ContactItem>
            <br />
            <LinkName>Phone <PhoneFilled style={{color: '#3146f5'}}/></LinkName>
            <ContactItem style={{paddingBottom: '20px'}}>(413) 301-4415</ContactItem>
        </NameBox>
    </Window>
);

export default Guide