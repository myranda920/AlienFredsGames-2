import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import ProjectsCard from '../components/Projects/ProjectsCard';
import Footer from '../components/Layout/Footer';

class Projects extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader 
                    pageTitle="Projects Style One" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Projects Style One" 
                />

                <ProjectsCard />
                
                <Footer />
            </>
        );
    }
}

export default Projects;