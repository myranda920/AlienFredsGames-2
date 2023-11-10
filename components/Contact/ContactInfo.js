import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <section className="pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="flaticon-email"></i>
                                </div>
                                <h3>Email Here</h3>
                                <p>
                                    alienfredsgames@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="flaticon-phone-call"></i>
                                </div>
                                <h3>Call Here</h3>
                                <p>+818-307-9796</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="flaticon-marker"></i>
                                </div>
                                <h3>Location Here</h3>
                                <p>San Fernando Valley, CA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactInfo;