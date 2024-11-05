import React from "react";
import './About.scss';

const About: React.FC = () => {
    return (
        <div className="container about-container">
            <div className="about-text">
                <h1>About</h1>
                <p>Welcome! My name is <b>Jerry Chen</b>, and I am currently a 3rd year undergraduate at the <b>University of California, Irvine</b>. 
                I am majoring in <b>Computer Science</b>, with a specialization in <b>Intelligent Systems</b>. My interests lie primarily in <b>computer vision</b>, 
                though I am excited to try different things!</p>
            </div>
            <div className="hobbies-section">
                <h2>Hobbies</h2>
                <ul className="hobbies-list">
                    <li><b>Bouldering</b></li>
                    <ul>
                        <li>I began around <i>September 2023</i>.</li>
                        <li>My highest completion is a <b>v7</b>!</li>
                        <li>Check out some of my sends <a href="https://drive.google.com/drive/folders/1XL46X_KYGvuPqXM7yDvtgI7OpJy-Fmep?usp=sharing" target="_blank" rel="noopener noreferrer">here</a>!</li>
                    </ul>
                    <li><b>Gaming</b></li>
                    <ul>
                        <li>My favorite game currently is <b>Geometry Dash</b>!</li>
                    </ul>
                    <li><b>Competative Programming</b></li>
                    <ul>
                        <li>Starting <i>November of 2024</i>, I am starting my formal grind to see how far I can go!</li>
                        <li>You can check out my progress on:</li>
                        <ul>
                            <li>
                                <a href="https://codeforces.com/profile/ThePrime" target="_blank" rel="noopener noreferrer">Codeforces</a>
                            </li>
                            <li><a href="https://leetcode.com/u/ThePrime1/" target="_blank" rel="noopener noreferrer">LeetCode</a>

                            </li>
                        </ul>
                    </ul>
                </ul>
            </div>
            <div className="contact-section">
                <h2>Contact</h2>
                <p>You don't.</p>
                <p>Unless you want to, then you can email me at <a href="mailto:jerryvc.business@gmail.com">jerryvc.business@gmail.com</a></p>
            </div>
        </div>
    );
};

export default About;