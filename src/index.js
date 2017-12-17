import './components';
import './index.css';

import Appfairy from 'appfairy';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

Appfairy.config.defaultOptions = {
  useMountPoint: false
};

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
