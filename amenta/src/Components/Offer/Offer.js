import React from 'react';
import Offers from '../Offers/Offers';
import './Offer.css'
// import DevicesIcon from '@material-ui/icons/Devices';

function Offer() {
    return (
        <div className="offer">
           <Offers 
                // img={DevicesIcon}
                title="Web Developer" 
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" 
                className="offer__offers"/> 
        </div>
    )
}

export default Offer
