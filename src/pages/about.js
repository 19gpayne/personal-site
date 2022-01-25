import React from 'react';

import InternetExplorer from '../windows/internetexplorer';
import NavAll from '../navbar/navall';
import BottomBar from '../common/bottombar';
import {PageFull} from './pagestyledcomponents';
import Solitaire from '../windows/solitaire';

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
                    <InternetExplorer/>
                    <Solitaire />
                    <br />
                    <br />
                </PageFull>
                <BottomBar setMobileActive={this.setMobileActive} active={this.state.mobileActive} tabNames={["Internet Explorer"]}/>
            </>
        )
    }
};

export default AboutPage;

