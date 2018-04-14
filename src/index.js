import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Basic React hot Rendering!';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
