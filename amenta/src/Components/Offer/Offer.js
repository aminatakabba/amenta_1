import React from 'react';
import Offers from '../Offers/Offers';
import './Offer.css'
import DevicesIcon from '@material-ui/icons/Devices';
import laptop from '../img/laptop.png'
import device from '../img/device.png'
import website from '../img/website.png'


function Offer() {
    return (
        <div className="offer">
            <h1>what we offer</h1>
                <div className="offer__line1">
                        <div className="offer__one">
                        <img src={laptop} className="offer__img"/>
                        <Offers 
                            title="Web Developer" 
                            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" 
                            className="offer__offers"
                        /> 
                    </div>
                    <div className="offer__one">
                        <img src={device} className="offer__img"/>
                        <Offers 
                            title="Web Developer" 
                            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" 
                            className="offer__offers"
                        /> 
                    </div>
                    <div className="offer__one">
                        <img src={website} className="offer__img"/>
                        <Offers 
                            title="Web Developer" 
                            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" 
                            className="offer__offers"
                        /> 
                    </div>
                </div>

                <div className="offer__line2">
                    <div className="offer__one">
                        <img src={laptop} className="offer__img"/>
                        <Offers 
                            title="Web Developer" 
                            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" 
                            className="offer__offers"
                        /> 
                    </div>
                    <div className="offer__one">
                        <img src={device} className="offer__img"/>
                        <Offers 
                            title="Web Developer" 
                            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" 
                            className="offer__offers"
                        /> 
                    </div>
                    <div className="offer__one">
                        <img src={website} className="offer__img"/>
                        <Offers 
                            title="Web Developer" 
                            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" 
                            className="offer__offers"
                        /> 
                    </div>
                </div>
        </div>
    )
}
// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
export default Offer
