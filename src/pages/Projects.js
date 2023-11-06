// Projects.js
import React, { useEffect } from 'react';

function Projects() {
    useEffect(() => {
        document.title = 'jerryvc | Projects';
    }, []);

    return (
        <div>
            <h1>Projects</h1>
            <p>This is the projects page.</p>
        </div>
    );
}

export default Projects;