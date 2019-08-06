import React from 'react';

import MyImage from './assets/images/myimage.jpg';

const App = ({ title }) => (
  <div>
    <span>{title}</span>
    <img src={MyImage} alt="torchlight in the sky" />
  </div>
);

export default App;
