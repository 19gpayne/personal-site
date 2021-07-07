import React from 'react';
import styled from 'styled-components';

import PopUpWindow from '../containers/popupwindow';
import NavPrimarySide from '../navbar/navside';

export const PageFull = styled.div`
    margin-left: 250px;
    width: calc(100% - 250px);
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
        <NavPrimarySide />
        <PageFull>
            <br />
            <PopUpWindow/>
            <br />
            <br />
        </PageFull>
    </>
);

export default Homepage;
