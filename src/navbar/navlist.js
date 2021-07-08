import React from 'react';

import {IeOutlined, LaptopOutlined, FolderFilled, MailFilled, FileWordOutlined} from '@ant-design/icons';

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
            label: <>Resume</>,
            href: "/resume",
            icon: <><FileWordOutlined/></>
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
