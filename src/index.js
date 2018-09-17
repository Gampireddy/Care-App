import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-carousel/lib/styles/carousel.css'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';







ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();