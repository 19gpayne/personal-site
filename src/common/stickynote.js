import React from 'react';
import styled from "styled-components";

const NoteLeft = styled.div`
    padding: 10px;
    background-color: ${props => props.color};
    box-shadow: 5px 5px 7px rgba(33,33,33,.7);
    z-index: 4;
    transform: rotate(4deg);
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50px;
    top: 50px;
    @media screen and (max-width: 1024px) {
        right: 100px;
        left: revert;
    }
    @media only screen and (max-width: 640px) {
        display: revert;
        right: 25px;
        left: revert;
        top: revert;
        bottom: 75px;
        width: 150px;
        height: 150px;
    }
    @media only screen and (max-width: 640px) and (min-height: 640px) {
        display: revert;
        right: 50px;
        left: revert;
        top: revert;
        bottom: 100px;
        width: 200px;
        height: 200px;
    }
`;

const NoteRight = styled.div`
    padding: 10px;
    background-color: ${props => props.color};
    box-shadow: -5px 5px 7px rgba(33,33,33,.7);
    z-index: 4;
    transform: rotate(-3deg);
    width: 200px;
    height: 200px;
    position: absolute;
    right: 50px;
    top: 425px;
    @media screen and (max-width: 1024px) {
        left: 50px;
        right: revert;
        top: 425px;
    }
    @media screen and (max-width: 640px) {
        display: none;
    }
`;

const Text = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
    white-space: pre-line;
    font-family: Covered By Your Grace;
    font-size: 1.5vw;
    padding: 5px;
    @media only screen and (max-width: 1200px) {
        font-size: 2vw;
    }
    @media only screen and (max-width: 1024px) {
        font-size: 3vw;
    }
    @media only screen and (max-width: 640px) {
        font-size: 5.5vw;
    }
`;

export const StickyNoteLeft = ({color}) => (
    <NoteLeft color={color}>
        <Text>Computer science student at Northeastern University</Text>
    </NoteLeft>
);

export const StickyNoteRight = ({color}) => (
    <NoteRight color={color}>
        <Text>
            Web Developer
            <br />
            ---
            <br />
            Software Engineer
        </Text>
    </NoteRight>
);