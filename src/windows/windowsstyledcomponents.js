import styled, {keyframes} from "styled-components";

import {CloseSquareFilled, MinusSquareFilled} from '@ant-design/icons';

export const Action = styled.div`
    display: inline-block;
    vertical-align: bottom;
    width: calc(100% - 275px);
    text-align: right;
    z-index: 2;
    color: #d3d3d3;
`;

export const ActionBar = styled.div`
    padding: 5px;
    background-color: #0c1c6c;
    color: white;
    text-align: left;
    width: calc(100% - 10px);
    @media screen and (max-width: 1024px) {
        padding: 10px;
        width: calc(100% - 20px);
    }
    z-index: 2;
    display: inline-flex;
    justify-content: space-between;
`;

export const Inline = styled.div`
    display: inline;
`;

export const ScreenSizeHidden = styled.div`
    @media screen and (max-width: 460px) {
        display: none;
    }
`;

export const expand = keyframes`
  from {
    transform: scale(0.01, 0.01);
  }
  to {
    transform: scale(1, 1);
  }
`;

export const WindowHeaderBar = ({label}) => (
      <ActionBar>
          <Inline>{label}</Inline>
          <Action><ScreenSizeHidden><MinusSquareFilled/><CloseSquareFilled/></ScreenSizeHidden></Action> 
      </ActionBar>
);