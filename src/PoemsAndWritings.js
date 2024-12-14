import React, { useState } from 'react';
import ftm from './images/ftm.PNG';
import tvr from './images/tvr.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const PoemsAndWritings = () => {
  const [isFtmExpanded, setFtmExpanded] = useState(false);
  const [isTvrExpanded, setTvrExpanded] = useState(false);
  const [isAmeliaExpanded, setAmeliaExpanded] = useState(false);
  const [isFireExpanded, setFireExpanded] = useState(false);
  const [isWhatHesOwedExpanded, setWhatHesOwedExpanded] = useState(false);
  const [isDisturbedStreetlightExpanded, setDisturbedStreetlightExpanded] = useState(false);
  const [isReduceMeToAshExpanded, setReduceMeToAshExpanded] = useState(false);
  const [isSellingMyselfExpanded, setSellingMyselfExpanded] = useState(false);

  return (
    <main>
      <section id="poems-writings">
        <h2 className="pw">Poems & Writings</h2>

        <div className="ftm_d collapsible-content">
          <h2 className="ftm_title" onClick={() => setFtmExpanded(!isFtmExpanded)}>
            From the Mountain {isFtmExpanded ? '▲' : '▼'}
          </h2>
          {isFtmExpanded && (
            <div>
              <LazyLoadImage src={ftm} className="ftm_cover" alt="From the Mountain" effect="blur"/>
              <p className="FTM_desc">
                From the Mountain is Sorrell's debut poetry book! The book is composed
                of poems that are based around heartbreak, loss, isolation, power, and love. From the Mountain
                was a #1 New Release for poetry books on Amazon on its opening weekend. This book
                made Sorrell a published author for the first time. Notable poems from this book include Amelia, Fire, and What He's Owed.
              </p>
            </div>
          )}
        </div>

        <div className="tvr_d collapsible-content">
          <h2 className="tvr_title" onClick={() => setTvrExpanded(!isTvrExpanded)}>
            The Vicious Rose {isTvrExpanded ? '▲' : '▼'}
          </h2>
          {isTvrExpanded && (
            <div>
              <LazyLoadImage src={tvr} className="tvr_cover" alt="The Vicious Rose" effect="blur"/>
              <p className="TVR_desc">
                The Vicious Rose is Sorrell's second poetry book released to Amazon. It focuses
                solely on heartbreak, exploring the depth of depression it can cause, along with the growth that can emerge from such pain.
                This theme spans across family trauma, rejection by friends, and romantic failures. The Vicious Rose has been featured
                on podcasts such as The Kokomo Press and the Juliuz Filez.
              </p>
            </div>
          )}
        </div>

        <div className="Amelia collapsible-content">
          <h2 onClick={() => setAmeliaExpanded(!isAmeliaExpanded)}>
            Amelia {isAmeliaExpanded ? '▲' : '▼'}
          </h2>
          {isAmeliaExpanded && (
            <div>
              <pre>
                During an uneventful morning,
                I sat in a London Cafe alone.
                The sky radiated azure.
                <br></br>
                The coffee, the fuel to my pulse,
                and the power to my stampeding thoughts.
                In a moment,
                my day would change.
                <br></br>
                She floated in, a spirit, a breathtaking change
                in a single moment.
                Amelia.
                She was enchanting.
                <br></br>
                Her eyes could cast a spell, her face possessed me.
                She took my hand,
                and in just a moment
                <br></br>
                the day belonged to her.
                We toured museums, 
                guided by her hand.
                <br></br>
                We had shared a pint, shared a meal,
                shared our interests.
                In just one moment,  
                we shared our lives.
                <br></br>
                To Amelia,
                no more than a memory now,
                it might have been love. 
                Or maybe, it was just one moment.
              </pre>
            </div>
          )}
        </div>

        <div className="Fire collapsible-content">
          <h2 onClick={() => setFireExpanded(!isFireExpanded)}>
            Fire {isFireExpanded ? '▲' : '▼'}
          </h2>
          {isFireExpanded && (
            <div>
              <pre>
              On a cold winter dawn,
            in the bleak, white room,
            I was born into a frozen world.
            This world,
            I would melt.
            <br></br>
            My life
            was a series of unlucky bets.
            I wanted to rise above.
            I wanted to fly high,
            and not perch low.
            <br></br>
            I broke records.
            I did the unexpected.
            With my words,
            I conquered the Earth.
            My spirit was a torch.
            <br></br>
            No matter the distance I ran,
            no matter the flames I fanned,
            the world burned as a bonfire,
            not a forest blaze.
            <br></br>
            My fire needed fuel.
            It used to come from within,
            but as lines riddled my face,
            the supply wore thin.
            <br></br>
            On a cold winter night,
            in the darkness of the cave,
            the fire,
            extinguished.
              </pre>
            </div>
          )}
        </div>

        <div className="What He's Owed collapsible-content">
          <h2 onClick={() => setWhatHesOwedExpanded(!isWhatHesOwedExpanded)}>
            What He's Owed {isWhatHesOwedExpanded ? '▲' : '▼'}
          </h2>
          {isWhatHesOwedExpanded && (
            <div>
              <pre>
              Brief,
            unfulfilled,
            and wasted,
            human life can be.
            Live this way,
            and remember,
            the Reaper always gets his due.
            <br></br>
            Long,
            accomplished,
            and wise,
            human life should be.
            Remember,
            the Reaper always gets his due.
            Cower before the Reaper.
            <br></br>
            He stalks in the street.
            When the moon’s guiding torch,
            is enchanting,
            there he pounces.
            The Reaper always gets his due.
            <br></br>
            Death should come,
            promptly,
            when time corrects the record.
            Prepare for the eternal journey.
            <br></br>
            The Reaper always gets his due.
              </pre>
            </div>
          )}
        </div>

        <div className="Disturbed Streetlight collapsible-content">
          <h2 onClick={() => setDisturbedStreetlightExpanded(!isDisturbedStreetlightExpanded)}>
            Disturbed Streetlight {isDisturbedStreetlightExpanded ? '▲' : '▼'}
          </h2>
          {isDisturbedStreetlightExpanded && (
            <div>
              <pre>
              In the distant, disturbed streetlight,
            I see a boy battered by time.
            A man, I presume his father,
            <br></br>
            stands like a redwood over him.
            Verbal daggers burst the boy’s spirit.
            The boy has slash scars on his arm,
            <br></br>
            from vicious duels.
            
            How could a boy,
            with a supernova’s flame in his being
            be allowed such torment?
            <br></br>
            I step inside the streetlight,
            to be blinded by mirror bulbs.
            The boy battered by time
            resides in my mind.
            <br></br>
            The verbal daggers, my affirmations.
            The slash scars from duels with myself.
            Who is the abusive father?
            <br></br>
            The one before my eyes.
              </pre>
            </div>
          )}
        </div>

        <div className="Reduce Me to Ash collapsible-content">
          <h2 onClick={() => setReduceMeToAshExpanded(!isReduceMeToAshExpanded)}>
            Reduce Me To Ash {isReduceMeToAshExpanded ? '▲' : '▼'}
          </h2>
          {isReduceMeToAshExpanded && (
            <div>
              <pre>
              I lie in bed again, 
            saying how I’ll be a stronger man.
            I’ll be more secure,
            I’ll be stable for her,
            <br></br>
            and the chemistry will remain electric.
            She won’t become an aspiration.
            
            I love that woman,
            even if the feeling is numb.
            <br></br>
            With excess affection,
            I try to make my neurons burn.
            In reality,
            the chemistry dissipates in smoke.
            <br></br>
            I tell you the truth, 
            The love I hold 
            extinguishes human patience. 
            No guru’s advice will heal it.
            <br></br>
            No isolation can freeze it.
            My love burns the world
            and reduces me to ash.
              </pre>
            </div>
          )}
        </div>

        <div className="Selling Myself collapsible-content">
          <h2 onClick={() => setSellingMyselfExpanded(!isSellingMyselfExpanded)}>
            Selling Myself {isSellingMyselfExpanded ? '▲' : '▼'}
          </h2>
          {isSellingMyselfExpanded && (
            <div>
              <pre>
              With my pressed suit,
            and predictable pitch,
            I go to your door
            to sell me to you.
            
            I’m a gentleman
            with a brutish side.
            <br></br>
            I’m a working man
            with a burnout’s past.
            I’m an extrovert
            with an introvert’s anxiety.
            <br></br>
            
            If you hesitate to buy me
            due to my downgrades,
            I’ll cover them up 
            with overt affection.
            <br></br>
            I’ll be so generous
            that generosity itself
            will be as tired to you
            as an aged mule’s eyes.
            <br></br>
            
            With a secured lock,
            and silence,
            I go to the next door.
            I never learn
            why all locks before
            were secured 
            <br></br>
            when I sell myself.
              </pre>
            </div>
          )}
        </div>

      </section>
    </main>
  );
};

export default PoemsAndWritings;