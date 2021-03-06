import React from 'react';

import MyComputer from '../windows/mycomputer';
import {StickyNoteLeft, StickyNoteRight} from '../common/stickynote';
import NavAll from '../navbar/navall';
import BottomBar from '../common/bottombar';
import {PageFull} from './pagestyledcomponents';

class Homepage extends React.Component {
    state={"mobileActive": false};

    componentDidMount() {
        
    }

    setMobileActive = async (status) => {
        await this.setState({"mobileActive": status});
    }

    render() {
        return (
            <>
                <NavAll mobileActive={this.state.mobileActive}/>
                <PageFull>
                    <br />
                    <StickyNoteLeft color={'yellow'}/>
                    <StickyNoteRight color={'skyblue'} />
                    <MyComputer/>
                    <br />
                    <br />
                </PageFull>
                <BottomBar setMobileActive={this.setMobileActive} active={this.state.mobileActive} tabNames={["My Computer"]}/>
            </>
        )
    }
};

export default Homepage;
