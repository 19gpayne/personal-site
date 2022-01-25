import React from 'react';

import NavAll from '../navbar/navall';
import BottomBar from '../common/bottombar';
import {PageFull} from './pagestyledcomponents';
import Word from '../windows/microsoftword';

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
                    <Word />
                    <br />
                    <br />
                </PageFull>
                <BottomBar setMobileActive={this.setMobileActive} active={this.state.mobileActive} tabNames={["Microsoft Word"]}/>
            </>
        )
    }
};

export default Homepage;
