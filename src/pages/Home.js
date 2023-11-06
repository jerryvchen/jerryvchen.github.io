// Home.js
import React, { useEffect } from 'react';

function Home() {
    useEffect(() => {
        document.title = 'jerryvc | Home';
    }, []);

    return (
        <div>
            <h1>Welcome to jerryvc.com!</h1>
            <p>This is the home page.</p>
        </div>
    );
}

export default Home;