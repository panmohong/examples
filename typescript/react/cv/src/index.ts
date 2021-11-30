import { createElement } from 'react';
import { render } from 'react-dom';
import App from './App';

console.info(process.env.GITHUB_SHA);
render(createElement(App), document.getElementById('root'));
