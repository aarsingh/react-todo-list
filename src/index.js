import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import * as serviceWorker from './serviceWorker'; /** We do not this because this is for progressive web apps */

/** Progressive web apps are websites that look and feel like an app. 
 * This means users can access all information and capabilities without downloading a mobile app. 
 * Instead, progressive web apps use modern web technology to deliver app-like experiences to users, 
 * right in their browsers. */

ReactDOM.render(<App />, document.getElementById('root'));

/** Here <App /> represents App.js data */

// serviceWorker.unregister();
