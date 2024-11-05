import React from "react";
import myPhoto from "../assets/jerryvc_photo.png";
import './Home.scss';

const Home: React.FC = () => {
    return (
        <div className="container home-container">
            <div className="row justify-content-center">
                <div className="col-md-6 home-text">
                    <h1>Hi!</h1>
                    <h5>This is <b>Jerry Chen</b>, the monke &rarr;</h5>
                    <p>CS @ Univeristy of California, Irvine</p>
                </div>
                <div className="col-md-6 text-center">
                    <img
                     src={myPhoto}
                     alt="Photo of Jerry Chen"
                     className="home-image"
                    />
                </div>
            </div>
            <div className="positions-section">
                <h2>Current Positions</h2>
                <ul className="positions-list">
                    <li><b>Student Researcher</b> - Vision Group @ UCI</li>
                    <ul>
                        <li>Led by <a href="https://acberg.com/" target="_blank" rel="noopener noreferrer">Alexander C. Berg</a> and <a href="https://ics.uci.edu/~fowlkes/" target="_blank" rel="noopener noreferrer">Charless C. Fowlkes</a></li>
                    </ul>
                    <li><b>Treasurer</b> - ACM @ UCI</li>
                    <ul>
                        <li>See our club page <a href="https://www.acm-uci.org/" target="_blank" rel="noopener noreferrer">here</a>!</li>
                    </ul>
                </ul>
            </div>
        </div>
    );
};

export default Home;