import styled from 'styled-components';

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
`;