import { mount } from "dashboard/DashboardApp";
import React, { useRef, useEffect } from 'react'

const DashboardApp = () => {
    const ref = useRef(null);

    useEffect(() => {
        if(ref?.current)  {
            mount(ref.current);
        }
    }, [])

    return <div ref={ref} />;
}


export default DashboardApp;

