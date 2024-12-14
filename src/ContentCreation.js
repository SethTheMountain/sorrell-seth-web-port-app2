import React, { useState } from 'react';
import STM_social from './images/STM_social.PNG'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ContentCreation = () => {
  const [isDescriptionExpanded, setDescriptionExpanded] = useState(false);
  const [isVideosExpanded, setVideosExpanded] = useState(false);

  return (
    <main>
      <section id="content-creation">
        <h2 className="cc">Content Creation</h2>
        <div className="seth_d">
          <LazyLoadImage
            src={STM_social} className="socialcc" alt="Seth The Mountain Social" effect="blur"/>
        </div>
        <h3 onClick={() => setDescriptionExpanded(!isDescriptionExpanded)}>
          Description {isDescriptionExpanded ? '▲' : '▼'}
        </h3>
        {isDescriptionExpanded && (
          <p className="ab_desc">
            Seth "The Mountain" Sorrell has yet to completely break through with his internet presence, but eventually
            he will make a splash. Sorrell has his presence spread through YouTube, Facebook, Instagram, X(Twitter),
            and Twitch. He is currently on a break from content creation, though he plans to return with a vengeance. Here are his social 
            links found on his LinkTree as well as his notable YouTube videos.
          </p>
        )}
        <a className="LT" href="https://linktr.ee/seththemountain" target="_blank" rel="noopener noreferrer">LinkTree</a>
        <br></br>

        <h3 onClick={() => setVideosExpanded(!isVideosExpanded)}>
          YouTube Videos {isVideosExpanded ? '▲' : '▼'}
        </h3>
        {isVideosExpanded && (
          <div>
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/JpScWBYSXLg?si=rrwqHaligvmVO48M" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/UhD8_N5ltEw?si=J7-PE2Dzf8q1Bdat" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/W0iuttDp9x0?si=0p9mIWtS44JHTAQd" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
          </div>
        )}
      </section>
    </main>
  );
};

export default ContentCreation;