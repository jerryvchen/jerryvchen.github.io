import React from "react";
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
                     src="src/assets/jerryvc_photo.png"
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
                        <li>Led by Alexander C. Berg and Charless C. Fowlkes</li>
                    </ul>
                    <li><b>Treasurer</b> - ACM @ UCI</li>
                    <ul>
                        <li>See https://www.acm-uci.org/</li>
                    </ul>
                </ul>
                
            </div>
        </div>
    );
};

export default Home;