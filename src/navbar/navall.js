import React from 'react';

import NavSide from '../navbar/navside';
import NavMobile from '../navbar/navmobile';

const NavAll = ({mobileActive}) => (
    <>
        <NavMobile active={mobileActive}/>
        <NavSide/>
    </>
);        

export default NavAll;