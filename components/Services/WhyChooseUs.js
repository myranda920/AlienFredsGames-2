import React, { Component } from 'react';

class WhyChooseUs extends Component {
    render() {
        return (
            <>
                <section className="why-choose-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="why-choose-content">
                                    <span className="sub-title">DELIVERY, SET-UP, BREAKDOWN & PICK-UP</span>
                                    <h2>We offer convenient delivery and setup</h2>
                                    <p>Services, ensuring that the jumbo games are placed in your desired location and set-up for immediate enjoyment. Our team will handle the transportation, installation and arrangement of the games, allowing you to focus on other aspects of your event.</p>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i> Delivery</h4>
                                        <p>Currently only delivering within a 15 mile radius from zip code 91345 (Mission Hills) </p>
                                    </div>

                                    <div className="features-text">
                                        <h4><i className="flaticon-tick"></i> Additional Details</h4>
                                        <p>PLEASE NOTE: a minimum of 2 games must be rented. </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="why-choose-image">
                                    <img src="/images/allGames.jpg" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default WhyChooseUs;