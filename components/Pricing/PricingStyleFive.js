import React, { Component } from 'react';
import Link from 'next/link';

class PricingStyleThree extends Component {
    render() {
        return (
            <section className="pricing-area-two pt-100 pb-70 bg-f4f7fe">
                <div className="container">
                    <div className="section-title">
                        <h2>Current Package Deals</h2>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-pricing-table center">
                                <div className="pricing-header">
                                    <h3>Bronze Package</h3>
                                </div>

                                <div className="price">
                                    <sup>$</sup> 155 
                                </div>

                                <ul className="pricing-features">
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        Get Three Games
                                    </li>
                                    <li> 
                                        <i className='bx bxs-x-circle red'></i>
                                        Excluding Jumbo Beer Pong
                                    </li>
                                </ul>

                                <div className="btn-box">
                                    <Link href="/contact">
                                        <a className="default-btn">
                                            Contact Us!
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-pricing-table center">
                                <div className="pricing-header">
                                    <h3>Silver Package</h3>
                                </div>

                                <div className="price">
                                    <sup>$</sup> 195 
                                </div>

                                <ul className="pricing-features">
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        Get Four Games
                                    </li>
                                    <li> 
                                        <i className='bx bxs-x-circle red'></i>
                                        Excluding Jumbo Beer Pong
                                    </li>
                                </ul>

                                <div className="btn-box">
                                    <Link href="/contact">
                                        <a className="default-btn">
                                            Contact Us!
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-pricing-table center">
                                <div className="pricing-header">
                                    <h3>Gold Package</h3>
                                </div>

                                <div className="price">
                                    <sup>$</sup> 295 
                                </div>

                                <ul className="pricing-features">
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        Get ALL 5 Games
                                    </li>
                                    <li>
                                        <i className='bx bxs-badge-check'></i>
                                        Includes Jumbo Beer Pong
                                    </li>
                                </ul>

                                <div className="btn-box">
                                    <Link href="/contact">
                                        <a className="default-btn">
                                            Contact Us!
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Animation Image */}
                <div className="shape-img7">
                    <img src="/images/shape/shape7.png" alt="image" />
                </div>
                <div className="shape-img2">
                    <img src="/images/shape/shape2.svg" alt="image" />
                </div>
                <div className="shape-img3">
                    <img src="/images/shape/shape3.svg" alt="image" />
                </div>
                <div className="shape-img4">
                    <img src="/images/shape/shape4.png" alt="image" />
                </div>
                <div className="shape-img5">
                    <img src="/images/shape/shape5.png" alt="image" />
                </div>
                <div className="shape-img6">
                    <img src="/images/shape/shape6.png" alt="image" />
                </div>
                <div className="shape-img9">
                    <img src="/images/shape/shape9.png" alt="image" />
                </div>
                <div className="shape-img10">
                    <img src="/images/shape/shape10.png" alt="image" />
                </div>
            </section>
        );
    }
}

export default PricingStyleThree;