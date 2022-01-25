import React from 'react';
import styled, {keyframes} from "styled-components";

import {CloseSquareFilled, MinusSquareFilled, GlobalOutlined} from '@ant-design/icons';

import { init, sendForm } from 'emailjs-com';
init('user_clod6RkEAjZGW7qD1yoCC');

const expand = keyframes`
  from {
    transform: scale(0.01, 0.01);
  }
  to {
    transform: scale(1, 1);
  }
`;

export const Window = styled.div`
    padding: 10px;
    background-color: #d3d3d3;
    width: calc(100% - 700px);
    margin: 0px auto 15px 10%;
    border-radius: 1px;
    margin-top: 30px;
    position: relative;
    height: fit-content;
    @media screen and (max-width: 1200px) {
        width: calc(100% - 550px);
    }
    @media screen and (max-width: 1024px) {
        margin: 0px auto 15px auto;
        width: calc(100% - 40px);
        padding: 10px;
    }
    @media screen and (max-width: 640px) {
        margin-top: 20px;
    }
    z-index: 2;
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

export const Action = styled.div`
    display: inline-block;
    vertical-align: bottom;
    width: calc(100% - 275px);
    text-align: right;
    z-index: 2;
    color: #d3d3d3;
`;

export const NameBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: black;
    box-shadow: inset 2px 2px 2px rgb(0 0 0 / 50%);
    border-bottom: 2px solid #d9d9d9;
    border-right: 2px solid #d9d9d9;
    margin-top: 10px;
    width: 100%;
    text-align: center;
    height: calc(100% - 80px);
    font-size: 80px;
    @media screen and (max-width: 460px) {
        font-size: 50px;
    }
    font-family: VT323;
`;


export const Inline = styled.div`
    display: inline;
`;

export const ScreenSizeHidden = styled.div`
    @media screen and (max-width: 460px) {
        display: none;
    }
`;

export const ChatMessage = styled.textarea`
    height: 100px;
    width: fit-content;
    resize: none;
    background-color: white !important;
    padding: 5px;
    border-radius: 5px;
    outline: none;
    width: calc(100% - 14px);
    @media screen and (max-width: 1024px) {
        padding: 10px;
        width: calc(100% - 24px);
    }
    border: 2px solid gray;
    display: block;
    margin: 0 auto;
    -webkit-appearance: none;
    opacity: 1;
`;

export const Button = styled.input`
    background-color: #226dab !important;
    padding: 7px 22px !important;
    color: white !important;
    border: 0 !important;
    border-radius: 0 !important;
    box-shadow: 3px 3px 3px rgba(33,33,33,1) !important;
    cursor: pointer !important;
    -webkit-appearance: none;
`;

class MOL extends React.Component {
    state = {error: "", contactNumber: 0, messageList: []}

      componentDidMount() {
          this.setState({contactNumber: "000000" + (Math.random() * 1000000 | 0)})
      }

      onSubmit(e) {
        e.preventDefault();

        sendForm('default_service', 'template_4oboe8f', '#contact-form')
            .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            const msg = {name: document.getElementById('user_name').value, message: document.getElementById('message').value}
            this.setState({"messageList": [...this.state.messageList, msg]})
            document.getElementById('contact-form').reset();
            }, function(error) {
            console.log('FAILED...', error);
            this.setState({'error': error})
            });
        
      }

      render() {
          return(
            <Window>
            <ActionBar>
                <Inline><GlobalOutlined/> IM From: xgwenpaynex</Inline>
                <Action><ScreenSizeHidden><MinusSquareFilled/><CloseSquareFilled/></ScreenSizeHidden></Action> 
            </ActionBar>
            <br />
            <br />
            <ChatMessage 
                disabled 
                value={
                    "xgwenpaynex: how are you :-)\nxgwenpaynex: send me a message!"
                    + this.state.messageList.map(m => {return "\n" + m.name + ": " + m.message})
                } 
            />
            <br />
            <br />
            <form id='contact-form' onSubmit={this.onSubmit}>
                <input required type='text' name='user_name' id='user_name' placeholder='Name*' style={{outline: 'none', border: '2px solid gray', borderRadius: '5px'}}/>
                <br/>
                <input required type='email' name='user_email' id='user_email' placeholder='Email*' style={{outline: 'none', border: '2px solid gray', borderRadius: '5px'}}/>
                <br/>
                <ChatMessage required name='message' id='message' placeholder='Message*'/>
                <br/>
                <br />
                {this.state.error !== "" && <div>{this.state.error}</div>}
                <div style={{textAlign: 'center'}}>
                    <Button type='submit' value='Send' style={{backgroundColor: '#226dab'}}/>
                    &nbsp;
                    <Button type="reset" value='Cancel' />
                </div>
                <br />
                <input type='hidden' name='contact_number' value={this.state.contactNumber} />
            </form>
            </Window>
          )
      }
}

export default MOL