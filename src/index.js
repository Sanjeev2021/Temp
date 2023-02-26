import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//install react-router-dom and import browser-router
import { BrowserRouter } from "react-router-dom"
//whatever page we need to show, we need to write inside browser-router

import SimpleReactLightbox from 'simple-react-lightbox'

ReactDOM.render(
    <BrowserRouter>
        <SimpleReactLightbox>
            <App />
        </SimpleReactLightbox>
    </BrowserRouter>,
    document.getElementById('root')
);

