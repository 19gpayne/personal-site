import styled from "styled-components";

export const MobileMenu = styled.div`
    position: fixed;
    top: calc(100% - 250px);
    bottom: 46px;
    left: 2px;
    z-index: 20;
    ${props => props.status !== true} {
        display: flex;
    }
    ${props => props.status !== false} {
        display: none;
    }
    background-color: #d3d3d3;
    border-right: 2px solid gray;
    border-top: 2px solid #dadada;
    border-left: 2px solid #dadada;
    border-bottom: 2px solid gray;
    box-shadow: 3px 3px 8px 0px rgb(0 0 0 / 20%);
`;

export const NavSide = styled.div`
    top: 0px;
    width: fit-content;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #388484;
    padding: 40px 30px;
    @media screen and (max-width: 1024px) {
        display: none;
    }
    z-index: 2;
`;

export const MobileIcon = styled.div`
    color: black;
    ${props => props.status !== 'active'} {
        font-weight: bold;
    }
    ${props => props.status !== 'inactive'} {
        font-weight: normal;
    }
    padding-top: 5px;
    cursor: pointer;
    & :hover {
        font-weight: bold;
    }
    font-size: 20px;
    text-align: right;
`;

export const DesktopIcon = styled.div`
    color: white;
    ${props => props.status !== 'active'} {
        font-weight: bold;
    }
    ${props => props.status !== 'inactive'} {
        font-weight: normal;
    }
    padding-top: 5px;
    cursor: pointer;
    & :hover {
        font-weight: bold;
    }
    font-size: 50px;
    text-align: center;
    @media only screen and (max-width: 1024px) and (min-height: 1024px) and (min-width: 640px) {
        padding: 0px 10px;
        font-size: 75px;
    }
`;

export const NavButton = styled.div`
    padding: 5px;
    display: block;
`;

export const SideBarGray = styled.div`
    width: 30px;
    z-index: 21;
    background-color: gray;
    margin: 10px;
    ${props => props.status !== true} {
        display: block;
    }
    ${props => props.status !== false} {
        display: none;
    }
`;

export const Label = styled.div`
    color: white;
    ${props => props.status !== 'active'} {
        font-weight: bold;
    }
    ${props => props.status !== 'inactive'} {
        font-weight: normal;
    }
    padding: 5px 0px;
    cursor: pointer;
    & :hover {
        text-decoration: underline;
    }
    text-align: center;
    padding-bottom: 5px;
    font-family: VT323;
    font-size: 20px;
    @media only screen and (max-width: 1024px) and (min-height: 1088px) and (min-width: 640px) {
        font-size: 30px;
    }
`;