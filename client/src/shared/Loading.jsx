/* eslint-disable-next-line */
import React from 'react';
import './styles/Loading.sass';
import { useSpring, animated } from 'react-spring';
import { Container } from 'reactstrap';

const quotes = [
  {
    quote: 'If you want to make somebody rich… don’t add to what they have, but take away their desire for more.',
    author: 'Epicurus',
  },
  {
    quote: 'A time when we are free from anxieties, is when we should chase adversity.',
    author: 'Seneca',
  },
  {
    quote: 'A great person shows their greatness, by the way they treat smaller people.',
    author: 'Carlyle',
  },
  {
    quote: 'Every person is my superior in someway. In that I learn of them.',
    author: 'Emerson',
  },
  {
    quote: "Don't criticise them, they're just what we would be under similar circumstances.",
    author: 'Lincoln',
  },
  {
    quote: 'The deepest principle in human nature is the craving to be appreciated.',
    author: 'William James',
  },
  {
    quote: "If there is any one secret of success, it lies in the ability to get other person's point of view amd see things from that person's angle as well as from your own.",
    author: 'Henry Ford',
  },
  {
    quote: 'Professionals stick to the schedule; amateurs let life get in the way.',
    author: 'James Clear',
  },
  {
    quote: 'A journey of a thousand miles begins with a single step.',
    author: 'Chinese Proverb',
  },
  {
    quote: 'Cautious, careful people, always casting about to preserve their reputations can never effect a reform.',
    author: 'Susan B Anthony',
  },
  {
    quote: 'The most difficult thing is the decision to act, the rest is merely tenacity.',
    author: 'Amelia Earhart',
  },
  {
    quote: 'The difference between successful people and others is how long they spend time feeling sorry for themselves.',
    author: 'Barbara Corcoran',
  },
  {
    quote: 'Step out of the history that is holding you back. Step into the new story you are willing to create.',
    author: 'Oprah Winfrey',
  },
  {
    quote: 'What you do makes a difference, and you have to decide what kind of difference you want to make.',
    author: 'Jane Goodall',
  },
  {
    quote: 'In order to be irreplaceable one must always be different.',
    author: 'Coco Chanel',
  },
  {
    quote: 'In order to be irreplaceable one must always be different.',
    author: 'Coco Chanel',
  },
  {
    quote: 'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.',
    author: 'Martin Luther King Jr.',
  },
  {
    quote: 'Education is the most powerful weapon which you can use to change the world.',
    author: 'Nelson Mandela',
  },
  {
    quote: 'It isn’t where you come from; it’s where you’re going that counts.',
    author: 'Ella Fitzgerald',
  },
];

const Loading = () => {
  const [props, set, stop] = useSpring(() => ({ width: '0%', config: { duration: 4000 } }));
  const index = Math.floor(Math.random() * quotes.length);

  set({ width: '100%' });

  stop();

  return (
    <div className="loading-container">
      <Container className="loading-wrapper">
        <h6 className="loading-label">Kyle Kearney&apos;s Portfolio</h6>
        <div className="quote-container">
          <h4 className="quote-text">
            &quot;
            {quotes[index].quote}
            &quot;
          </h4>
          <h6 className="author-text">{quotes[index].author}</h6>
          <div className="progress-bar">
            <animated.div style={props} className="progress-bar-inner" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Loading;
