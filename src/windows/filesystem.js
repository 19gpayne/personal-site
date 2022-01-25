import React from 'react';
import styled from "styled-components";

import {FolderFilled, PlusSquareOutlined, MinusSquareOutlined, ArrowLeftOutlined} from '@ant-design/icons';

import { expand, WindowHeaderBar } from './windowsstyledcomponents';

const Window = styled.div`
    padding: 10px;
    background-color: #d3d3d3;
    width: calc(100% - 300px);
    margin-top: auto;
    margin-bottom: auto;
    top: 0;
    bottom: 0;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    position: absolute;
    border-radius: 1px;
    @media screen and (max-width: 1024px) {
        width: calc(100% - 40px);
        padding: 10px;
    }
    z-index: 2;
    height: 550px;
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

const NameBox = styled.div`
    display: flex;
    background-color: white;
    color: black;
    box-shadow: inset 2px 2px 2px rgb(0 0 0 / 50%);
    border-bottom: 2px solid #d9d9d9;
    border-right: 2px solid #d9d9d9;
    margin-top: 10px;
    width: 100%;
    font-size: 18px;
    @media screen and (max-width: 640px) {
        font-size: 15px;
    }
    font-family: VT323;
`;

const SpacedCell = styled.td`
    padding: 5px;
`;

const HeaderCell = styled.td`
    background-color: #d3d3d3;
    border-right: 2px solid black;
    border-top: 2px solid #dadada;
    border-left: 2px solid #dadada;
    border-bottom: 2px solid black;
`;

const UnstyledList = styled.div`
    list-style: none;
    margin-inline-start: 20px;
`;

const Button = styled.button`
    background-color: #d3d3d3;
    border-right: 2px solid black;
    border-top: 2px solid #dadada;
    border-left: 2px solid #dadada;
    border-bottom: 2px solid black;
    border-radius: 0;
    cursor: pointer;
    text-decoration: underline;
`;

const projectList = [
    {"id": 1, "name": "Personal Website", "date": "2021/2022", "status": "In Progress", "img": "https://res.cloudinary.com/dou0q4ekk/image/upload/v1643059618/Screen_Shot_2022-01-24_at_4.21.59_PM_mn9zmc.png", "bio": "Designed and coded own personal website to showcase resume and contact information.", 'tags': ['ReactJS', 'JavaScript', 'HTML', 'CSS']},
    {"id": 2, "name": "Reminder Bot", "date": "2021/2022", "status": "In Progress", "img": "https://res.cloudinary.com/dou0q4ekk/image/upload/v1643075073/Screen_Shot_2022-01-24_at_8.44.15_PM_bbobjq.png", "bio": "Discord bot that allows users to set a reminder of a specific message up to 24 days later.", 'tags': ['ReactJS', 'Discord APIs']},
    {"id": 3, "name": "Spreadsheet Application", "date": 2021, "status": "Complete", "img": "https://res.cloudinary.com/dou0q4ekk/image/upload/v1643062263/image1_qlp1rs.png", "bio": "An digital interactive spreadsheet application, used for organizing budgets, creating financial reports, and other uses. The spreadsheet allows users to enter information into cells, reference cells, add/delete rows and columns, sum and average cell ranges, write mathematical formulas, and concatenate strings. Users can also filter and sort rows, create graphs, and separate text by a delimiter. Created for CS4530 at Northeastern University with Jared Rudnicki and Ethan Lam.", 'tags': ['ReactJS', 'TypeScript', 'HTML', 'CSS'], 'url': ''},
    {"id": 4, "name": "Pantry Pal", "date": 2021, "status": "Complete", "img": "https://res.cloudinary.com/dou0q4ekk/image/upload/v1643072273/image1_pwmfxe.png", "bio": "A website to connect food pantries with people who want to donate by allowing organizations to list items they are in need of and donors to search which organizations need an item. Created for HackMIT 2021 with Kevin Zyskowski, Isabella Conner, and Spencer Solomon. Won 2nd place in the Microsoft Azure Challenge.", 'tags': ['ReactJS', 'JavaScript', 'HTML', 'CSS'], 'url': ''},
    {"id": 5, "name": "Password Generator", "date": 2021, "status": "Complete", "img": "https://res.cloudinary.com/dou0q4ekk/image/upload/v1643075369/Screen_Shot_2022-01-24_at_8.48.58_PM_crcml5.png", "bio": "A program that generates secure, memorable passwords. Allows users to specify number of words, capitals, numbers, and symbols, as well as display a help message. Usage: ./main.py [-h] [-w WORDS] [-c CAPS] [-n NUMBERS] [-s SYMBOLS]. Created for CY2550 at Northeastern University with Kevin Zyskowski.", 'tags': ['Python'], 'url': ''},
    {"id": 6, "name": "Walmart Innovation Website", "date": 2021, "status": "Complete", "img": "https://res.cloudinary.com/dou0q4ekk/image/upload/v1643071773/Screen_Shot_2022-01-24_at_7.49.20_PM_c4cgyk.png", "bio": "Designed and coded a website to display my idea for “Walmart’s next innovation” which is a smart shopping cart and compatible app. Won 1 of 14 scholarships from Walmart x Girls Who Code to attend the 2021 Grace Hopper Celebration.", 'tags': ['ReactJS', 'JavaScript', 'HTML', 'CSS'], 'url': 'https://github.com/19gpayne/walmart-innovation-gwc'},
    {"id": 7, "name": "Star Sign Bot", "date": 2020, "status": "Complete", "img": "https://res.cloudinary.com/dou0q4ekk/image/upload/v1643075585/Screen_Shot_2022-01-24_at_8.52.50_PM_lysyng.png", "bio": "Twitter bot that when tweeted at will try to guess your astrological sign.", 'tags': ['JavaScript', 'Twitter APIs'], 'url': 'https://github.com/19gpayne/Star-Sign-Twitter-Bot'},
    {"id": 8, "name": "Minesweeper", "date": 2020, "status": "Complete", "img": "https://res.cloudinary.com/dou0q4ekk/image/upload/v1643075788/Screen_Shot_2022-01-24_at_6.03.43_PM_k56hgs.png", "bio": "A recreation of the classic game Minesweeper with the ability to specify board size, add and remove flags, and floodfill. Created for CS2510 at Northeastern University with Jessica Sokal.", 'tags': ['Java'], 'url': ''},
    {"id": 9, "name": "MNIST Identifier", "date": 2019, "status": "Complete", "img": "https://res.cloudinary.com/dou0q4ekk/image/upload/v1643065929/Screen_Shot_2022-01-24_at_6.11.53_PM_m8k2if.png", "bio": "A machine learning program to determine the closest match to a handwritten number using the MNIST dataset. Created for CS2500 at Northeastern University with Kevin Cam.", 'tags': ['Racket'], 'url': ''},
]

class FileManagement extends React.Component {
    state={
        "project": {
            "id": null, 
            "name": "", 
            "date": null, 
            "status": "", 
            "img": "",
            "bio": "",
            "tags": [],
            "url": ""
        },
        "viewProject": false
    };

    componentDidMount() {
        
    }

    render() {
        return(
            <Window>
                <WindowHeaderBar label={<><FolderFilled/> File Management</>}/>
                <div style={{display: 'inline-flex', width: '100%', height: 'calc(100% - 80px)', alignItems: 'stretch'}}>
                    <NameBox style={{maxWidth: '33%', display: 'block', height: '100%', overflow: 'hidden'}}>
                        <table style={{width: '100%', height: 'fit-content'}}>
                            <tr>
                                <HeaderCell>File Management</HeaderCell>
                            </tr>
                        </table>
                        <br />
                        <UnstyledList style={{marginInlineStart: '20px', listStyle: 'none'}}>
                            <li>
                                <span><MinusSquareOutlined/>&nbsp;System Tools</span>
                                <UnstyledList>
                                    <li><PlusSquareOutlined/>&nbsp;System Information</li>
                                    <li><PlusSquareOutlined/>&nbsp;Device Manager</li>
                                    <li><PlusSquareOutlined/>&nbsp;Local Users</li>
                                    <li><PlusSquareOutlined/>&nbsp;Performance Logs</li>
                                </UnstyledList>
                            </li>
                            <li>
                                <span><PlusSquareOutlined/>&nbsp;Applications</span>
                            </li>
                            <li>
                                <span><PlusSquareOutlined/>&nbsp;Services</span>
                            </li>
                            <li>
                                <span><MinusSquareOutlined/>&nbsp;Folders</span>
                                <UnstyledList>
                                    <li><PlusSquareOutlined/>&nbsp;CS2500</li>
                                    <li><PlusSquareOutlined/>&nbsp;IS4300</li>
                                    <li><PlusSquareOutlined/>&nbsp;Photos</li>
                                    {this.state.viewProject ?
                                        <li>
                                            <span><MinusSquareOutlined/>&nbsp;Projects</span>
                                            <UnstyledList>
                                                <li style={{backgroundColor: 'navy', color: 'white'}}>
                                                    <PlusSquareOutlined/>
                                                    &nbsp;
                                                    {projectList.filter(p => {
                                                        return (
                                                            p === this.state.project
                                                        )
                                                    })[0].name}
                                                </li>
                                                
                                            </UnstyledList>
                                        </li>
                                        :
                                        <li style={{backgroundColor: 'navy', color: 'white'}}><PlusSquareOutlined/>&nbsp;Projects</li>
                                    }
                                    <li>
                                        <span><MinusSquareOutlined/>&nbsp;Random</span>
                                        <UnstyledList>
                                            <li><PlusSquareOutlined/>&nbsp;Memes</li>
                                        </UnstyledList>
                                    </li>
                                </UnstyledList>
                            </li>
                            <li>
                                <span><PlusSquareOutlined/>&nbsp;Removable Storage</span>
                            </li>
                        </UnstyledList>
                    </NameBox>
                    <br />
                    <br />
                    <NameBox style={{display: 'block', overflowX: 'auto', overflowY: this.state.viewProject ? 'auto' : 'hidden', height: '100%'}}>
                        {this.state.viewProject ? 
                            <>
                                <table>
                                    <tr>
                                        <HeaderCell style={{cursor: 'pointer'}} onClick={() => {return this.setState({'viewProject': false})}}><ArrowLeftOutlined /></HeaderCell>
                                        {this.state.project.tags.map((t, i) => {
                                            return (
                                                <HeaderCell key={i}>{t}</HeaderCell>
                                            )
                                        })}
                                    </tr>
                                </table>
                                <br />
                                <h2 style={{margin: '0px 10px 10px 10px'}}>
                                    {this.state.project.name}
                                </h2>
                                <br />
                                {this.state.project.url !== "" &&
                                <>
                                    <a style={{margin: '0px 10px 10px 10px'}} href={this.state.project.url} target='_blank' rel='noreferrer'>
                                        {this.state.project.url}
                                    </a>
                                    <br />
                                    <br />
                                </>
                                }
                                <div style={{margin: '0px 10px 10px 10px'}}>
                                    {this.state.project.bio}
                                </div>
                                <br />
                                <div style={{width: '100%', textAlign: 'center'}}>
                                    <img 
                                        src={this.state.project.img} 
                                        alt={this.state.project.name} 
                                        style={{objectFit: 'contain', maxWidth: '80%', maxHeight: '40%'}}
                                    />
                                </div>
                                <br />
                            </>
                            :
                            <table style={{width: '100%', height: 'fit-content'}}>
                                <tr>
                                    <HeaderCell>Name</HeaderCell>
                                    <HeaderCell>Date</HeaderCell>
                                    <HeaderCell>Status</HeaderCell>
                                    <HeaderCell>Action</HeaderCell>
                                </tr>
                                {projectList.map((p, i) => {
                                    return (
                                        <tr key={i} style={{padding: '5px', cursor: 'default'}} onClick={() => {return this.setState({project: p, viewProject: true})}}>
                                            <SpacedCell>{p.name}</SpacedCell>
                                            <SpacedCell style={{padding: '5px'}}>{p.date}</SpacedCell>
                                            <SpacedCell style={{padding: '5px'}}>{p.status}</SpacedCell>
                                            <SpacedCell style={{padding: '5px'}}><Button onClick={() => {return this.setState({project: p, viewProject: true})}}>Learn More</Button></SpacedCell>
                                        </tr>
                                    )
                                })}
                            </table>
                        }
                    </NameBox>
                </div>
            </Window>
        )
    }

}

export default FileManagement