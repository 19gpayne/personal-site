import React from 'react';

import NavAll from '../navbar/navall';
import BottomBar from '../common/bottombar';
import {PageFull} from './pagestyledcomponents';
import AOL from '../windows/aol';
import Guide from '../windows/guide';
import Channel from '../windows/aolchannel';

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
                    <AOL />
                    <Guide />
                    <Channel />
                    <br />
                    <br />
                </PageFull>
                <BottomBar setMobileActive={this.setMobileActive} active={this.state.mobileActive} tabNames={["Message Online"]}/>
            </>
        )
    }
};

export default Homepage;
