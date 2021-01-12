import React from 'react';
import './Offers.css'
import DevicesIcon from '@material-ui/icons/Devices';

function Offers({ image, title, paragraph}) {
    return (
        <div className="offers">
            {/* <DevicesIcon className="offers__icon"/> */}
            <p>{image}</p>
            <h1>{title}</h1>
            <p>{paragraph}</p>
        </div>
    )
}

export default Offers
