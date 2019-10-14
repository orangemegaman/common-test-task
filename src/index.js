import 'bootstrap.js';
import React from 'react';
import {render} from 'react-dom';
import AppContainer from './containers/AppContainer';

const appElement = document.getElementById('app');

render(<AppContainer />, appElement);
