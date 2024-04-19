import { mount } from "auth/AuthApp";
import React, { useRef, useEffect } from 'react'
import { useHistory } from "react-router-dom";


const AuthApp = ({ onSignIn }) => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        if(ref?.current)  {
            const { onParentNavigate } = mount(ref.current, {
                initialPath: history.location.pathname,
                onNavigate: ({ pathname: nextPathname }) => {
                    const { pathname: currentPathname } = history.location;

                    if(currentPathname !== nextPathname) {
                        history.push(nextPathname);
                    }    
                },
                onSignIn: onSignIn
            });

            history.listen(onParentNavigate);
        }
    }, [])

    return <div ref={ref} />;
}


export default AuthApp;

