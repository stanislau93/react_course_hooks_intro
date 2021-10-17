import React from 'react'

import { useTime } from '../hooks/useTime';

const Header = () => {
    const time = useTime();

    const firstPart = time.toString().substr(0,10);

    return <h1>First part of date: {firstPart}</h1>
};

const Content = () => {
    const time = useTime();

    const timePart = time.toString().substr(16,8);

    return <p>Second part of date: {timePart}</p>
};

export const UseCustomHookExample = () => {
    return (
        <React.Fragment>
            <Header />
            <Content />
        </React.Fragment>
    )
};