import React from "react";
import './Home.scss';

const Home: React.FC = () => {
    return (
        <div className="container home-container">
            <div className="row justify-content-center">
                <div className="col-md-6 home-text">
                    <h1>Hello</h1>
                    <p>This is Jerry Chen</p>
                </div>
                <div className="col-md-6 text-center">
                    <img
                     src="src/assets/jerryvc_photo.png"
                     alt="Photo of Jerry Chen"
                     className="home-image"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;