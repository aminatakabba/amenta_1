import React from 'react';
import './Contact.css';
import logo from '../img/logo.png'

function Contact() {
    return (
        <div className="contact">
            <h1>get in touch</h1>
            <div className="contact__sub">
                <div className="contact__right">
                    <input type="text" placeholder="your name" className="contact__rightInput" />
                    <input type="email" placeholder="your email" className="contact__rightInput" />
                    <textarea type="text" placeholder="message" className="contact__rightInput" />
                </div>

                <div className="contact__left">
                    <div className="contact__leftDiv">
                        <img src={logo} alt="logo" />
                        <div className="options">
                            <label class="contact__leftDivRadio">collaboration
                                <input type="radio" checked="checked" name="radio"/>
                                <span class="checkmark"></span>
                            </label>
                            <label class="contact__leftDivRadio">consultation
                                <input type="radio" checked="checked" name="radio"/>
                                <span class="checkmark"></span>
                            </label>
                            <label class="contact__leftDivRadio">other
                                <input type="radio" checked="checked" name="radio"/>
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <button type="submit">submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
