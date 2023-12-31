import React, { Component } from 'react';
import Link from 'next/link';

class Projects extends Component {
    render() {
        return (
            <div className="works-area ptb-100">
                <div className="container-fluid">
                    <div className="section-title">
                        <h2>Games & Packages</h2>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> */}
                    </div>
 
                    {/* Games Section */}
                    <div className="projects-area ptb-100">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-projects-box">
                                    <img src="/images/projects-image/ImageConnect4.jpg" alt="image" />

                                    <div className="projects-content">
                                        <h3>
                                            <Link href="/project-details">
                                                <a>Jumbo Connect 4</a>
                                            </Link>
                                        </h3>
                                        <span className="category">$55</span>
                                    </div>

                                    <div className="plus-icon">
                                        <Link href="/project-details">
                                            <a className="popup-btn">
                                                <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-projects-box">
                                    <img src="/images/projects-image/ImageJumboJenga.jpg" alt="image" />

                                    <div className="projects-content">
                                        <h3>
                                            <Link href="/project-details">
                                                <a>Jumbo Jenga</a>
                                            </Link>
                                        </h3>
                                        <span className="category">$60</span>
                                    </div>

                                    <div className="plus-icon">
                                        <Link href="/project-details">
                                            <a className="popup-btn">
                                                <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-projects-box">
                                    <img src="/images/projects-image/ImageProSizeCornhole.jpg"alt="image" />

                                    <div className="projects-content">
                                        <h3>
                                            <Link href="/project-details">
                                                <a>Pro-Size Cornhole</a>
                                            </Link>
                                        </h3>
                                        <span className="category">$55</span>
                                    </div>

                                    <div className="plus-icon">
                                        <Link href="/project-details">
                                            <a className="popup-btn">
                                                <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-projects-box">
                                    <img src="/images/projects-image/ImageTicTacToe.jpg" alt="image" />

                                    <div className="projects-content">
                                        <h3>
                                            <Link href="/project-details">
                                                <a>Jumbo Tic-Tac-Toe</a>
                                            </Link>
                                        </h3>
                                        <span className="category">$55</span>
                                    </div>

                                    <div className="plus-icon">
                                        <Link href="/project-details">
                                            <a className="popup-btn">
                                                <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-projects-box">
                                    <img src="/images/projects-image/ImageJumboBeerPong.png" alt="image" />

                                    <div className="projects-content">
                                        <h3>
                                            <Link href="/project-details">
                                                <a>Jumbo Beer-Pong</a>
                                            </Link>
                                        </h3>
                                        <span className="category">$125</span>
                                    </div>

                                    <div className="plus-icon">
                                        <Link href="/project-details">
                                            <a className="popup-btn">
                                                <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-projects-box">
                                    <img src="/images/projects-image/project6.jpg" alt="image" />

                                    <div className="projects-content">
                                        <h3>
                                            <Link href="/project-details">
                                                <a>Social Media Marketing</a>
                                            </Link>
                                        </h3>
                                        <span className="category">Development</span>
                                    </div>

                                    <div className="plus-icon">
                                        <Link href="/project-details">
                                            <a className="popup-btn">
                                                <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* Other Projects Option */}

                    <div className="row">
                        {/* <div className="col-lg-4 col-sm-6 col-xl-3">
                            <div className="work-card">
                                <img src="/images/works/work1.jpg" alt="image" />
                                
                                <div className="content text-center">
                                    <span>
                                        <Link href="/projects3">
                                            <a>Development</a>
                                        </Link>
                                    </span>
                                    <h3>
                                        <Link href="/project-details">
                                            <a>Designing a better cinema experience</a>
                                        </Link>
                                    </h3>
                                    
                                    <Link href="/project-details">
                                        <a className="work-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-4 col-sm-6 col-xl-3">
                            <div className="work-card">
                                <img src="/images/works/work2.jpg" alt="image" />
                                
                                <div className="content text-center">
                                    <span>
                                        <Link href="/projects3">
                                            <a>Web Design</a>
                                        </Link>
                                    </span>
                                    <h3>
                                        <Link href="/project-details">
                                            <a>Building design process within teams</a>
                                        </Link>
                                    </h3>
                                    
                                    <Link href="/project-details">
                                        <a className="work-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-4 col-sm-6 col-xl-3">
                            <div className="work-card">
                                <img src="/images/works/work3.jpg" alt="image" />
                                
                                <div className="content text-center">
                                    <span>
                                        <Link href="/projects3">
                                            <a>eCommerce</a>
                                        </Link>
                                    </span>
                                    <h3>
                                        <Link href="/project-details">
                                            <a>How intercom brings play eCommerce</a>
                                        </Link>
                                    </h3>
                                        
                                    <Link href="/project-details">
                                        <a className="work-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-4 col-sm-6 col-xl-3">
                            <div className="work-card">
                                <img src="/images/works/work4.jpg" alt="image" />
                                
                                <div className="content text-center">
                                    <span>
                                        <Link href="/projects3">
                                            <a>React</a>
                                        </Link>
                                    </span>
                                    <h3>
                                        <Link href="/project-details">
                                            <a>How to start a project with Reactjs</a>
                                        </Link>
                                    </h3>
                                        
                                    <Link href="/project-details">
                                        <a className="work-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-4 col-sm-6 col-xl-3">
                            <div className="work-card">
                                <img src="/images/works/work5.jpg" alt="image" />
                                
                                <div className="content text-center">
                                    <span>
                                        <Link href="/projects3">
                                            <a>Angular</a>
                                        </Link>
                                    </span>
                                    <h3>
                                        <Link href="/project-details">
                                            <a>Examples of different types of sprints</a>
                                        </Link>
                                    </h3>
                                        
                                    <Link href="/project-details">
                                        <a className="work-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-4 col-sm-6 col-xl-3">
                            <div className="work-card">
                                <img src="/images/works/work6.jpg" alt="image" />
                                
                                <div className="content text-center">
                                    <span>
                                        <Link href="/projects3">
                                            <a>Development</a>
                                        </Link>
                                    </span>
                                    <h3>
                                        <Link href="/project-details">
                                            <a>Redesigning the New York times app</a>
                                        </Link>
                                    </h3>
                                        
                                    <Link href="/project-details">
                                        <a className="work-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-4 col-sm-6 col-xl-3">
                            <div className="work-card">
                                <img src="/images/works/work7.jpg" alt="image" />
                                
                                <div className="content text-center">
                                    <span>
                                        <Link href="/projects3">
                                            <a>Graphic Design</a>
                                        </Link>
                                    </span>
                                    <h3>
                                        <Link href="/project-details">
                                            <a>Graphic Design Design the Web, Mobile, and eCommerce</a>
                                        </Link>
                                    </h3>
                                        
                                    <Link href="/project-details">
                                        <a className="work-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-4 col-sm-6 col-xl-3">
                            <div className="work-card">
                                <img src="/images/works/work8.jpg" alt="image" />
                                
                                <div className="content text-center">
                                    <span>
                                        <Link href="/projects3">
                                            <a>Bootstrap</a>
                                        </Link>
                                    </span>
                                    <h3>
                                        <Link href="/project-details">
                                            <a>Bootstrap Redesigning the New York times app</a>
                                        </Link>
                                    </h3>
                                        
                                    <Link href="/project-details">
                                        <a className="work-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div> */}
 
                        {/* <div className="col-lg-4 col-sm-6 col-xl-3">
                            <div className="work-card">
                                <img src="/images/works/work9.jpg" alt="image" />
                                
                                <div className="content text-center">
                                    <span>
                                        <Link href="/projects3">
                                            <a>App Development</a>
                                        </Link>
                                    </span>
                                    <h3>
                                        <Link href="/project-details">
                                            <a>We provide any type of app development</a>
                                        </Link>
                                    </h3>
                                        
                                    <Link href="/project-details">
                                        <a className="work-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-4 col-sm-6 col-xl-3">
                            <div className="work-card">
                                <img src="/images/works/work10.jpg" alt="image" />
                                
                                <div className="content text-center">
                                    <span>
                                        <Link href="/projects3">
                                            <a>Marketing</a>
                                        </Link>
                                    </span>
                                    <h3>
                                        <Link href="/project-details">
                                            <a>We provide any type of marketing support</a>
                                        </Link>
                                    </h3>
                                        
                                    <Link href="/project-details">
                                        <a className="work-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-4 col-sm-6 col-xl-3">
                            <div className="work-card">
                                <img src="/images/works/work11.jpg" alt="image" />
                                
                                <div className="content text-center">
                                    <span>
                                        <Link href="/projects3">
                                            <a>Email Marketing</a>
                                        </Link>
                                    </span>
                                    <h3>
                                        <Link href="/project-details">
                                            <a>We provide any type of Email Marketing</a>
                                        </Link>
                                    </h3>
                                        
                                    <Link href="/project-details">
                                        <a className="work-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-4 col-sm-6 col-xl-3">
                            <div className="work-card">
                                <img src="/images/works/work12.jpg" alt="image" />
                                
                                <div className="content text-center">
                                    <span>
                                        <Link href="/projects3">
                                            <a>Email Marketing</a>
                                        </Link>
                                    </span>
                                    <h3>
                                        <Link href="/project-details">
                                            <a>We provide any type of Marketing & Reporting</a>
                                        </Link>
                                    </h3>
                                        
                                    <Link href="/project-details">
                                        <a className="work-btn">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div> */}

                        {/* Pagination */}
                        {/* <div className="col-lg-12 col-sm-12">
                            <div className="pagination-area">
                                <Link href="/projects3">
                                    <a className="prev page-numbers">
                                        <i className="fas fa-angle-double-left"></i>
                                    </a>
                                </Link>
                                <span className="page-numbers current">1</span>
                                <Link href="/projects3">
                                    <a className="page-numbers">2</a>
                                </Link>
                                <Link href="/projects3">
                                    <a className="page-numbers">3</a>
                                </Link>
                                <Link href="/projects3">
                                    <a className="page-numbers">4</a>
                                </Link>
                                <Link href="/projects3">
                                    <a className="next page-numbers">
                                        <i className="fas fa-angle-double-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;