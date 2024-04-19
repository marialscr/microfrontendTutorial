import React from 'react';
import ReactDOM  from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

const mount = (element, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
    // default history for development (its a browser history) and a memory history for microfrontend when in container
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [ initialPath ]
    });
    
    if(onNavigate) {
        history.listen(onNavigate);
    }
    
    ReactDOM.render(
        <App history={history} onSignIn={onSignIn} />,
        element
    )

    return {
        onParentNavigate: ({ pathname: nextPathname}) => {
            const { pathname: currentPathname } = history.location;

            if(currentPathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    }
}

if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_auth-dev-root');

    if(devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}

export { mount };