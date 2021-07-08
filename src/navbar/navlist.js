import React from 'react';

import {IeOutlined, WindowsFilled, FolderFilled, MailFilled, FileWordOutlined} from '@ant-design/icons';

const navList = {
    main: [
        {
            label: <>&nbsp;&nbsp;Home</>,
            href: "/",
            icon: <>&nbsp;<WindowsFilled/></>
        },
        {
            label: <>&nbsp;&nbsp;About</>,
            href: "/about",
            icon: <>&nbsp;<IeOutlined/></>
        },
        {
            label: <>&nbsp;&nbsp;Resume</>,
            href: "/resume",
            icon: <>&nbsp;<FileWordOutlined/></>
        },
        {
            label: <>&nbsp;&nbsp;Projects</>,
            href: "/projects",
            icon: <>&nbsp;<FolderFilled/></>
        },
        {
            label: <>&nbsp;&nbsp;Contact</>,
            href: "/contact",
            icon: <>&nbsp;<MailFilled/></>
        },
    ]
};

export default navList;
