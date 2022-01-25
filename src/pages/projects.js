import React from 'react';

import NavAll from '../navbar/navall';
import BottomBar from '../common/bottombar';
import {PageFull} from './pagestyledcomponents';
import ComputerManagement from '../windows/filesystem';

class Projects extends React.Component {
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
                    <ComputerManagement/>
                    <br />
                    <br />
                </PageFull>
                <BottomBar setMobileActive={this.setMobileActive} active={this.state.mobileActive} tabNames={["File Management"]}/>
            </>
        )
    }
};

export default Projects;
