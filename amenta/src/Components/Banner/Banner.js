import React from 'react';
import './Banner.css'
import portrait  from '../img/ami.jpg'
function Banner() {
    return (
        <div className="banner">
            <div className="banner__Right">
                <h1>front end web </h1>
                <h1>and software </h1>
                <h1>development </h1>
                <h1>services</h1>
            </div>

            <div className="banner_Left">
                <div className="banner__LeftDiv">
                    <div className="banner__LeftImg">
                        <img src={portrait} className="portrait"/>
                    </div>
                    <h2>aminata kabba</h2>
                    <p>behind the code</p>
                </div>
            </div>
        </div>
    )
}

export default Banner
