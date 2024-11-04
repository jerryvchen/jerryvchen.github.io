import React from "react";
import './About.scss';

const About: React.FC = () => {
    return (
        <div className="container about-container">
            <div className="about-text">
                <h1>About</h1>
                <p>idk</p>
            </div>
            <div className="hobbies-section">
                <h2>Hobbies</h2>
                <ul className="hobbies-list">
                    <li><b>Bouldering</b></li>
                    <ul>
                        <li>I began around September 2023.</li>
                        <li>My highest completion is a <b>v7</b>!</li>
                        <li>Check out some of my sends here!</li>
                    </ul>
                    <li><b>Gaming</b></li>
                    <ul>
                        <li>My favorite game currently is <b>Geometry Dash</b>!</li>
                    </ul>
                    <li><b>Competative Programming</b></li>
                    <ul>
                        <li>Starting November of 2024, I am starting my formal grind to see how far I can go!</li>
                        <li>You can check out my progress on:</li>
                        <ul>
                            <li>Codeforces</li>
                            <li>LeetCode</li>
                        </ul>
                    </ul>
                </ul>
            </div>
            <div className="contact-section">
                <h2>Contact</h2>
                <p>You don't.</p>
            </div>
        </div>
    );
};

export default About;