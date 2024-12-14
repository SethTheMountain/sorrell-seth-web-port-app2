import React, { useState } from 'react';
import Seth_Personal from './images/Seth_Personal.jpg';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const AboutMe = () => {
    const [isBioExpanded, setBioExpanded] = useState(false);

    const toggleBio = () => {
        setBioExpanded(!isBioExpanded);
    };

    return (
        <section id="about-me">
            <h2 className="ab">About Me</h2>
            <div className="s_pers">
              <LazyLoadImage
                src={Seth_Personal} 
                className="s_pers" 
                alt="Seth" 
                effect="blur"
              />
            </div>
            <h3 onClick={toggleBio} style={{ cursor: 'pointer', textAlign: 'center' }}>
                Biography {isBioExpanded ? '▲' : '▼'}
            </h3>
            {isBioExpanded && (
                <p className="ab_desc">
                  Seth "The Mountain" Sorrell is an artist, programmer, and content creator
                  from Indiana, USA. He has published two poetry books on Amazon, has performed 
                  numerous times in central Indiana, and is working towards becoming a front-end 
                  developer. Sorrell is a follower of Christ who believes in using his various
                  talents for enlightening himself and those around him.
                </p>
            )}
        </section>
    );
};

export default AboutMe;