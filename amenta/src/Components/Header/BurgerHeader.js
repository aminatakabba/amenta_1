import React, { useState } from 'react';
import './BurgerHeader.css';
import RightHeader from './RightHeader'

function BurgerHeader() {
    return (
        <div className="burgerHeader" 
        // onClick={RightHeader}
        >
            <div className="burgerHeaderDiv" />
            <div className="burgerHeaderDiv" />
            <div className="burgerHeaderDiv" />
        </div>
    )
}

export default BurgerHeader