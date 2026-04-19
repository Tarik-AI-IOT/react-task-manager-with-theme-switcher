import { useState, useEffect } from "react";

export default function TimeZone() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formattedTime = currentTime.toLocaleString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    const style = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px',
            fontSize: '0.9rem',
        }
    };

    return (
        <div style={style.container}>
            <p>{formattedTime}</p>
        </div>
    );
}