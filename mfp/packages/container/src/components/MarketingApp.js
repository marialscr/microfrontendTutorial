import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from 'react'
import { useHistory } from "react-router-dom";


const MarketingApp = () => {
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
                }
            });

            history.listen(onParentNavigate);
        }
    }, [])

    return <div ref={ref} />;
}


export default MarketingApp;

