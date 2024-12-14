import React, { useState } from 'react';

const BlogPosts = () => {
  const [isConnectionOpen, setConnectionOpen] = useState(false);
  const [isPhilosophyOpen, setPhilosophyOpen] = useState(false);
  const [isRejectionOpen, setRejectionOpen] = useState(false);
  const [isTakeawaysOpen, setTakeawaysOpen] = useState(false); // State for toggling Key Takeaways

  return (
    <main>
      <section id="about-me">
        <h2 className="ab">Blog Posts</h2>
        
        <h3 className="b1" onClick={() => setConnectionOpen(!isConnectionOpen)}>
          Poetry and Mental Health: A Chaotic Connection {isConnectionOpen ? '▲' : '▼'}
        </h3>
        {isConnectionOpen && (
          <p className="b1p">
              Over my four years of writing poetry, 
                I've noticed an intriguging connection between the poems I write and my mental health. 
                In some ways, poetry has helped me see my experiences from a whole new perspective, but in others, I've stayed stagnant as an artist and human.
                I have three key pieces that detail the connection between the poems I write, and my mental health. Through my poems, I can release my pain in a manner that isn't self-destructive, and I can also comfort those who struggle to express themselves. 
                I fear too many people seek self destructive behavior as a way to "free" themselves from the pain. 
                In truth, self destruction is chosen because it's allure is more appealing than the discomfort of facing your issues head on.
                When I write my poems, I feel that I am staring the abyss in the eye and analyzing its every cell.
                My analysis, and how I express it creatively in my verses establishes a connection between myself and my audience. 
                One poem I shared with an old friend was called "Walked Out". It talked about the internal struggle of someone knowing they have to leave a relationship but feeling too attached to their lover to do so. 
                The friend felt very connected to the poem and even shared it with their estranged ex-partner. 
                The friend felt that the indecision expressed in the poem was similar to the indecision of going back to their ex. 
                Though Poetry can be a way to healthily cope with your issues, that alone will not prevent you from sliding into self-destruction. 
                You only need to look at examples such as Lord Byron, Charles Bukowski, or Edgar Allen Poe to see how self-destruction can haunt an artist.
                I've been further able to understand the deeper psychology of my issues and what makes me, me. Through writing poetry, I've discovered how pecuilar I really am and I've embraced it. I've recently taken up to dressing in more tie-dye and even some alternative style. This is contrast to the usual dressy button downs I've worn before. Poetry has freed me from thinking and acting too conservatively. 
                Poetry has also helped me to see the causes of my struggles with love. I've shared my poem Amelia several times at open mic's. 
                After reading this poem to so many, I've realized that I tend to desire love that is passionate and burns bright, but is destructive and snuffed out quickly. 
                If no intentional steps are taken to improve your mindset or lifestyle, the poems you write about your struggles will just grow said struggles. Just like any other way that you can express your issues, if you don't take action steps, those expressions are self-defeating. 
                I was stuck on one woman for a long time. She was the first true love that I felt. She and I had an awful falling out, and I was very embittered for a long time. I wrote two whole poetry books, mostly inspired by the heartache I felt. 
                It took two years, intentional empathy toward her situation, and a complete reset on my mindset towards dating to completely heal. 
          </p>
        )}

        <h3 className="b2" onClick={() => setPhilosophyOpen(!isPhilosophyOpen)}>
          The Power of Philosophy {isPhilosophyOpen ? '▲' : '▼'}
        </h3>
        {isPhilosophyOpen && (
          <p className="b2p">
            I feel that so many of us are in a constant state of pain. So many are struggling with depression, anxiety, and other mental health struggles. It can feel easy to be lost as if there is no hope. 
                It is pretty easy to get down and out when so many failures and traumatic events come our way. I've gone through several depressive episodes in my life. 
                These episodes started during my early high school years. I was beginning to write poetry and was involved in my school's Esports team, but I was not doing enough with my poetry, and my Esports team did not provide me long-term fulfillment. 
                I was on the verge of self-harm. However, I decided to take a course of action that would help, studying philosophy. I began to read the works of Nietzche and Marcus Aurelius. With Nietzche, I learned how you can become someone influential in the face of trauma. 
                I learned that you can embrace pain to allow you to transform. I learned with Aurelius that discipline and having peace with your circumstances can make you stronger. It would take a few more years of trauma and pain before I would get to where I'm at now. What is that place? 
                Well, I'm more focused on my growth and healing and not being focused on gaining the favor of others. It is a lonely road, but if I had not studied philosophy, I would be in a more hopeless state.
          </p>
        )}

        <h3 className="b3" onClick={() => setRejectionOpen(!isRejectionOpen)}>
          The Power of Rejection {isRejectionOpen ? '▲' : '▼'}
        </h3>
        {isRejectionOpen && (
          <p className="b3p">
            I've had several rejections over my lifetime, whether from failed potential relationships, 
                my work not being accepted by a publisher, the constant bullying I went through growing up, or any other point where I was not welcomed. 
                Through the heartache and pain, I've found an inward power. A couple of months ago, my best friend, a woman, declined to have me as her partner and instead decided to pursue another man. 
                This has been a common occurrence over my lifetime. Admittedly, when I was younger, I did not handle it correctly. I was the archetypal "Fedora," if you know your internet lore. I would winge and cry to the woman on why she didn't pick me,
                begging for her affection. However, in the past few years, my usual strategy, once rejected, has been simply walking away with no begging involved. Even though I would walk away, I lacked a key ingredient. That being the ability to love the man I am without retreating into other people's attention. When my best friend rejected me, that rejection was utterly different. 
                I had come to the realization of just how high value I had become over the years. My ambitions and work with school, my current machining career, community involvement, writing, and content creation have made me independent, enduring, and dedicated. After this last rejection, I saw the need to be no longer desperate and that I needed to have peace of mind.
                It is not enough for rejection alone to give you the power I have. You can be rejected your whole life, but if you take no time for mental and spiritual inventory, you'll continue to be pathetic. To become powerful from rejection, I had to ask myself who I wanted to be as a man. I had to begin work on a purpose beyond myself. For me, that is working towards becoming a Renaissance man. I want to be accomplished as a scholar, writer, machinist, graphic designer, and content creator. As I have learned through my last rejection, that great purpose was only the first step. 
                I had to learn to become content with being alone in my mind. A lesson I am still learning.
                Many people, including myself, have tended to run away from this notion. We run to potential relationships as an escape from ourselves. Even those with the whole world at their command can fall into this trap. I had to become my second-best companion, just below the Lord. I had to start taking better care of my physical health. 
                I had to spend intentional alone time to enjoy my presence and to mentally and spiritually heal.
                I tend to do this through prayer, meditation, walking, and journaling. I do realize my inward power now because of the rejections I've gone through. I've seen the high value in myself, and I embrace it. 
          </p>
        )}

        <h3 className="ulT" onClick={() => setTakeawaysOpen(!isTakeawaysOpen)}>
          Key Takeaways {isTakeawaysOpen ? '▲' : '▼'}
        </h3>
        {isTakeawaysOpen && (
          <ul>
            <li>
              After a rejection, write in a journal about the event, what role you might have played, and where you are mentally. 
              Come up with an action plan to heal.
            </li>
            <li>
              If you lack a greater purpose in life, begin to journal about what person you want to become. What would you like to accomplish? 
              What talents/skills do you want to go all the way with?
            </li>
            <li>
              Write down what ways you can love yourself. Maybe you need to have a better skincare routine, be better at what you eat and how much you exercise, 
              or begin to have a more spiritual life.
            </li>
          </ul>
        )}
      </section>
    </main>
  );
};

export default BlogPosts;