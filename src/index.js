import 'appfairy/components';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './components';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
