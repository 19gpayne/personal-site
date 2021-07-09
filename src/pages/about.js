import React from 'react';

import PopUpWindow from '../common/popupwindowcomputer';
import {StickyNoteLeft, StickyNoteRight} from '../common/stickynote';
import NavAll from '../navbar/navall';
import BottomBar from '../common/bottombar';
import {PageFull} from './pagestyledcomponents';

class AboutPage extends React.Component {
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
                    <StickyNoteLeft color={'pink'}/>
                    <StickyNoteRight color={'skyblue'} />
                    <PopUpWindow/>
                    <br />
                    <br />
                </PageFull>
                <BottomBar setMobileActive={this.setMobileActive} active={this.state.mobileActive} tabName={"Internet Explorer"}/>
            </>
        )
    }
};

export default AboutPage;

