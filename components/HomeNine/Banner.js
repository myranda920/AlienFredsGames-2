import React, { Component } from 'react';
import Link from 'next/link';

class Banner extends Component {
    render() {
        return (
            <div className="portfolio-agency-banner pa-bg1">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container mt-80">
                            <div className="banner-content text-center">
                                <h1>Welcome to Alien Fred's Games 🛸 </h1>
                                <p>We abduct boredom and deliver fun. Enjoy your guests and eliminate the stress!</p>
                                
                                <div className="banner-btn">
                                    <Link href="/contact">
                                        <a className="default-btn mr-4">
                                            View Games <span></span>
                                        </a>
                                    </Link>

                                    <Link href="/index9">
                                        <a className="default-btn-two">
                                            Contact Us! <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Shape Images */}
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
                <div className="shape-img7">
                    <img src="/images/shape/shape7.png" alt="image" />
                </div>
                <div className="shape-img8">
                    <img src="/images/shape/shape8.png" alt="image" />
                </div>
                <div className="shape-img9">
                    <img src="/images/shape/shape9.png" alt="image" />
                </div>
                <div className="shape-img10">
                    <img src="/images/shape/shape10.png" alt="image" />
                </div>
            </div>
        );
    }
}

export default Banner;