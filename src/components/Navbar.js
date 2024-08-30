// Import necessary libraries
import React, { useState, useEffect } from 'react';
import { StyledNavBar, Tab, LeftSection, RightSection } from '../styles/StyledNavBarComponents';

// Clock component to display current date and time
const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const formatDate = (date) => {
        const day = date.getDate();
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${day} ${month} ${year} ${hours}:${minutes}:${seconds} `;
    };

    return <span>{formatDate(time)}</span>;
};

// NavBar component
const NavBar = () => {
    return (
        <StyledNavBar>
            <LeftSection>
                <Tab to={"/"} end>Archives</Tab>
                <Tab to={"/About"}>About</Tab>
                <Tab to={"/Contact"}>Contact</Tab>
            </LeftSection>
            <RightSection>
                <Clock />
            </RightSection>
        </StyledNavBar>
    );
};

export default NavBar;
