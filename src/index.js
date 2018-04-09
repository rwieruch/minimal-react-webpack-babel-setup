import React from 'react';
import ReactDOM from 'react-dom';

const Component = props => <p {...props}>Hey !</p>;

ReactDOM.render(
  <div data-test-id="bob">
      <Component data-test-id="jen"/>
  </div>,
  document.getElementById('app')
);

module.hot.accept();
