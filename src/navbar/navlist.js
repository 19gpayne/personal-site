import React from 'react';

import {
    IeOutlined, 
    LaptopOutlined, 
    FolderFilled, 
    MailFilled, 
} from '@ant-design/icons';

const navList = {
    main: [
        {
            label: <>Home</>,
            href: "/",
            icon: <><LaptopOutlined/></>
        },
        {
            label: <>About</>,
            href: "/about",
            icon: <><IeOutlined/></>
        },
        {
            label: <>Projects</>,
            href: "/projects",
            icon: <><FolderFilled/></>
        },
        {
            label: <>Contact</>,
            href: "/contact",
            icon: <><MailFilled/></>
        },
    ]
};

export default navList;
