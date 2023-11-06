// Resume.js
import React, { useEffect } from 'react';

function Resume() {
    useEffect(() => {
        document.title = 'jerryvc | Resume';
    }, []);

    return (
        <div>
            <h1>Resume</h1>
            <p>This is the resume page.</p>
        </div>
    );
}

export default Resume;