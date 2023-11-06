// Contact.js
import React, { useEffect } from 'react';

function Contact() {
    useEffect(() => {
        document.title = 'jerryvc | Contact';
    }, []);

    return (
        <div>
            <h1>Contact</h1>
            <p>This is the contact page.</p>
        </div>
    );
}

export default Contact;