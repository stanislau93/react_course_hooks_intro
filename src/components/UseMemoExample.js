import React, { useState, useEffect, useMemo } from 'react'

const fetchPreferences = userId => {
    return ["food", "coffee", "wine"];
};

const usePreferencesNoMemo = userId => {
    const [prefs, setPrefs] = useState(null);

    useEffect(() => {
        const res = fetchPreferences(userId);
        setPrefs(res);
    }, [userId]);
  
    return prefs;
};

const usePreferencesWithMemo = userId => {
    return useMemo(() => fetchPreferences(userId), [userId]);
};

export const UseMemoExample = ({ userId }) => {
    const prefs = usePreferencesWithMemo(userId);

    useEffect(() => {
        console.log("RENDERED!");
    });

    if (!prefs) {
        return <p> Loading ... </p>;
    }

    return (
        <React.Fragment>
            <ul>
                {prefs.map(pref => <p key={pref}>{pref}</p>)}
            </ul>
        </React.Fragment>
    )
}