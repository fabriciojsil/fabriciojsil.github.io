import React, { Fragment } from 'react';
import { render } from 'react-dom';

import SocialCard from './components/SocialCard';

import linkedinImg from './img/linkedin-icon.png';

const App = () => (
  <Fragment>
    <SocialCard alt="alt" url="https://www.linkedin.com/in/fabriciojean" image={linkedinImg} />
  </Fragment>
);

render(<App />, document.getElementById('app'));
