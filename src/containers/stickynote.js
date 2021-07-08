import React from 'react';
import styled from "styled-components";

import {StickyNoteWriting} from '../fonts/fonts';

export const NoteLeft = styled.div`
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
    @media screen and (max-width: 1088px) {
        right: 100px;
        left: revert;
    }
    @media screen and (max-width: 748px) {
        display: none;
    }
`;

export const NoteRight = styled.div`
    padding: 10px;
    background-color: ${props => props.color};
    box-shadow: -5px 5px 7px rgba(33,33,33,.7);
    z-index: 4;
    transform: rotate(-3deg);
    width: 200px;
    height: 200px;
    position: absolute;
    right: 50px;
    bottom: 50px;
    @media screen and (max-width: 1088px) {
        right: 100px;
        left: revert;
    }
    @media screen and (max-width: 748px) {
        display: none;
    }
`;

export const Text = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
    white-space: pre-line;
`;

export const StickyNoteLeft = ({color}) => (
    <NoteLeft color={color}>
        <Text>Computer science student at Northeastern</Text>
    </NoteLeft>
);

export const StickyNoteRight = ({color}) => (
    <NoteRight color={color}>
        <Text>
            Web developer
            <br />
            ---
            <br />
            Software Engineer
        </Text>
    </NoteRight>
);