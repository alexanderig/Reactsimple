import React, {Component} from "react";
import {NavLink} from "react-router-dom";

export default class NavComponent extends Component {

    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <ul>
                    <li className='nav-item'>
                        <NavLink to='/' exact activeClassName='active' className='btn btn-primary'>Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/text-input' exact activeClassName='active' className='btn btn-primary'>Text input</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/articles' exact activeClassName='active' className='btn btn-primary'>Articles</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/articles/create' exact activeClassName='active' className='btn btn-primary'>Create Article</NavLink>
                    </li>

                </ul>
            </nav>
        );
    }

}
