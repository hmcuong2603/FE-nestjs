import React from 'react'
import { Link, NavLink } from "react-router-dom";
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className='sidebar-all'>
                <div className="sidebar_icon">
                    <NavLink className='item' to="/">
                        <i className="fa-solid fa-house svg"></i>
                    </NavLink>
                </div>
                <div className="sidebar_icon">
                    <NavLink className='item' to="/mytodo">
                        <i classname="fa-solid fa-table-list"></i>
                    </NavLink>
                </div>
                <div className="sidebar_icon">
                    <NavLink className='item' to="/profile">
                        <i classname="fa-solid fa-user"></i>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
