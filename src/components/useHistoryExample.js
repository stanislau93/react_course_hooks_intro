import React from 'react'
import { useHistory } from "react-router-dom";

export const UseHistoryExample = () => {
    const history = useHistory();

    const doRedirect = () => {
        history.push('google.de');
    };

    return (
        <input type="button" value="click to go to google" onClick={doRedirect} />
    )
}