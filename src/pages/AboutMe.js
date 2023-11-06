// AboutMe.js
import React, { useEffect } from 'react';

function AboutMe() {
    useEffect(() => {
        document.title = 'jerryvc | About Me';
    }, []);

    return (
        <div>
            <h1>About Me</h1>
            <p>This is the about me page.</p>
        </div>
    );
}

export default AboutMe;