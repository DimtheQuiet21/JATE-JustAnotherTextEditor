import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';
import {loadIcons} from './logo'

const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor();

if (typeof editor === 'undefined') {
  loadSpinner();
}

loadIcons()

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // register workbox service worker
  // const workboxSW = new Workbox('/src-sw.js', { scope: '/' });
  // workboxSW.register();
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
} else {
  console.error('Service workers are not supported in this browser.');
}

// document.addEventListener('DOMContentLoaded', () => {
//   // Assuming you have access to the service worker registration
//   navigator.serviceWorker.ready
//     .then(registration => {
//       // Get the logo path from the service worker
//       const logoPath = registration.active.getLogoPath();

//       // Set the src attribute of the img tag
//       const logoImage = document.getElementById('logoImage');
//       if (logoImage) {
//         logoImage.src = logoPath;
//       }
//     })
//     .catch(error => {
//       console.error('Error getting service worker registration:', error);
//     });
// });