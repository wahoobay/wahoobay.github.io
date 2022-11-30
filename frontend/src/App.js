// @flow
import React from 'react';
import Routes from './routes/Routes';
import axios from 'axios';

// setup fake backend
import { configureFakeBackend } from './helpers';

// Themes

// For Saas import Saas.scss
import './assets/scss/Creative.scss';

// For Modern demo import Modern.scss
// import './assets/scss/Modern.scss';

// For Creative demo import Creative.scss
// import './assets/scss/Creative.scss';

// configure fake backend
configureFakeBackend();

// For axios
axios.defaults.baseURL = "http://wahoobaydev-env.eba-atpea6pi.us-west-2.elasticbeanstalk.com";

type AppProps = {};

/**
 * Main app component
 */
const App = (props: AppProps): React$Element<any> => {
    return <Routes></Routes>;
};

export default App;
