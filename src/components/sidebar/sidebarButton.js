import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './sidebarButton.css'
import { IconContext } from 'react-icons'
function SidebarButton(props) {

    const location = useLocation();
    const isActive = location.pathname === props.to;
    const btnClass = isActive ? "btn-body active" : "btn-body";
    return (
        <Link to={props.to}>
            <IconContext.Provider value={{ size: '24px' }} className='btn-icon'>
                <div className={btnClass}>
                    {props.icon}
                    <p className='btn-title'>
                        {props.title}
                    </p >
                </div>
            </IconContext.Provider>
        </Link >
    )
}

export default SidebarButton
