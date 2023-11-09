import React, { Component } from 'react';
import Link from 'next/link';

export class SidebarModal extends Component {
    state = {
        modal: false
    };
    closeModal = () => {
        this.props.onClick(this.state.modal);
    }
    render() {
        return (
            <>
                <div className={`sidebar-modal ${this.props.active}`}>
                    <div className="sidebar-modal-inner">
                        <div className="sidebar-about-area">
                            <div className="title">
                                <h2>About Us</h2>
                                <p>At Alien Fred’s Games, we started with a simple love for gathering friends and family for game nights, which evolved into a game rental service. We are known as the go-to source for games among our friends and relatives, and now we extend the unique and memorable experience to the wider community. Our mission is to create memories by offering a diverse range of high-quality games for various occasions. We offer unique custom options that you won’t find elsewhere. We feature a wide variety of games from the popular classics to latest trending games. Our collection is constantly expanding. </p>
                            </div>
                        </div>

                        <div className="sidebar-instagram-feed">
                            <h5>"Customer satisfaction is our top priority, and we strive to make the rental experience seamless with flexible rental periods, competitive pricing, and convenient delivery and pickup services." </h5>
                            
                        </div>
                        <p>We understand the importance of social connections and the power of laughter and enjoyment. Let us make your next gathering an unforgettable one. Embrace the possibilities and laughter with Alien Fred’s Games, we promise to abduct boredom while delivering the fun to you and your guests.</p>

                        <div className="sidebar-contact-area">
                            <div className="contact-info">
                                <div className="contact-info-content">
                                    <h2>
                                        <span className="main-color">
                                            +818-307-9796
                                        </span>
                                        <span className="or">OR</span>
                                        <span>alienfredsgames@gmail.com</span>
                                    </h2>
            
                                    <ul className="social">
                                        {/* <li>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li> */}
                                        {/* <li>
                                            <a href="https://www.youtube.com/" target="_blank">
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                        </li> */}
                                        {/* <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li> */}
                                        {/* <li>
                                            <a href="https://www.linkedin.com/" target="_blank">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li> */}
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <span onClick={this.closeModal} className="close-btn sidebar-modal-close-btn">
                            <i className="flaticon-close"></i>
                        </span>
                    </div>
                </div>
            </>
        );
    }
}

export default SidebarModal;