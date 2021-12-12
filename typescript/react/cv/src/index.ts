import { createElement } from 'react';
import { render } from 'react-dom';
import App from './App';
import NotFound from './NotFound';

console.info(process.env.GITHUB_SHA);
const token = new URLSearchParams(window.location.search).get('token') || '';
if (token === process.env.BUILD_HASH) {
  render(createElement(App), window.document.getElementById('root'));
} else {
  render(createElement(NotFound), window.document.getElementById('root'));
}
