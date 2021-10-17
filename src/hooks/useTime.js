import { useState, useEffect } from "react";

export const useTime = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setTimeout(() => setTime(new Date()), 1000);

        return () => window.clearTimeout(timerId); 
    }, [time])

    return time;
};