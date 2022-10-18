import React from 'react';
import app from './app';
import { createRoot } from 'react-dom/client'; 
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<app/>);



import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'react-notifications-component/theme.css';
import 'animate.css/animate.compat.css';

import { store, history } from '_store';

import Root from '_environment/Root';

render( <
    Root history = { history }
    store = { store }
    />,
    document.getElementById('app'),
);