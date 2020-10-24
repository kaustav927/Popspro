import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

function ProjectsPage(props) {

    return(
        <div id="project">
            <Hero title={props.title} />
            <Carousel />
        </div>
    );

}

export default ProjectsPage;