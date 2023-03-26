import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './service-worker-registration'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') ?? '';
const rootElement = document.getElementById('root')
const root = createRoot(rootElement as HTMLElement);

root.render(
  <BrowserRouter basename={baseUrl}>
      <App />
  </BrowserRouter>
);

serviceWorkerRegistration.unregister();