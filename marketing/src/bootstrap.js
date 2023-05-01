import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

// Mount function to start up the app
const mount = (el, { onNavigate, defualtHistory }) => {

	const history = defualtHistory || createMemoryHistory();

	if(onNavigate) {
		history.listen(onNavigate) // if any history change, do onNavigate
	}
	ReactDOM.render(<App history={history} />, el);

	return {
		onParentNavigate({ pathname: nextPathName }) {
			console.log(`The Container Just Navigated to ${nextPathName}!`);
			const { pathname } = history.location;
			if(pathname !== nextPathName) {
				history.push(nextPathName);
			}
		}
	}
};

// If we are in development and in isolation,
// call mount immediately
const isolatedRoot = document.querySelector('#_marketing-dev-root');
if (isolatedRoot) {
    mount(isolatedRoot, { defualtHistory: createBrowserHistory()});
}

// We are running through container
// and we should export the mount function
export { mount };
