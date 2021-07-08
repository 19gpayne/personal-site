import React from 'react';
import styled from 'styled-components';

import NavAll from '../navbar/navall';

export const PageFull = styled.div`
    margin-left: 125px;
    width: calc(100% - 125px);
    @media screen and (max-width: 1024px) {
        margin-left: 0px;
        width: 100%;
    }
    background-color: #388484;
    top: 0px;
    position: absolute;
    bottom: 0;
    z-index: 1;
`;

const Homepage = () => (
    <>
        <NavAll />
        <PageFull>
            <br />
            <br />
            <br />
        </PageFull>
    </>
);

export default Homepage;
