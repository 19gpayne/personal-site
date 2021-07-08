import React from 'react';
import styled from 'styled-components';

import PopUpWindow from '../containers/popupwindow';
import {StickyNoteLeft, StickyNoteRight} from '../containers/stickynote';
import NavAll from '../navbar/navall';

export const PageFull = styled.div`
    margin-left: 125px;
    width: calc(100% - 125px);
    @media screen and (max-width: 1088px) {
        margin-left: 0px;
        width: 100%;
    }
    background-color: #388484;
    top: 0px;
    position: absolute;
    bottom: 0;
`;

const Homepage = () => (
    <>
        <NavAll />
        <PageFull>
            <br />
            <StickyNoteLeft color={'yellow'}/>
            <StickyNoteRight color={'skyblue'} />
            <PopUpWindow/>
            <br />
            <br />
        </PageFull>
    </>
);

export default Homepage;
