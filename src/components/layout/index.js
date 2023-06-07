import React from 'react';
import {
    Outlet,
    NavLink
  } from "react-router-dom";
import { useReactContext } from '../../libs/context';

function Layout(props) {
    const context = useReactContext(props.context);

    return(
        <div className="bg-light">
            <div id="db-wrapper">
                <nav className="navbar-vertical navbar">
                    <div className="nav-scroller">
                        <a className="navbar-brand" href="/">
                            <img src="/media/img/logo-company.png" alt="LOGO" />
                        </a>
                        <ul className="navbar-nav flex-column" id="sideNavbar">
                            <li className="nav-item">
                                <NavLink to={'/home'} className="nav-link has-arrow">
                                <i data-feather="home" className="nav-icon icon-xs me-2"></i>  Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <div className="navbar-heading">Modulos</div>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/evaluaciones'} className="nav-link has-arrow">
                                    <i data-feather="clipboard" className="nav-icon icon-xs me-2">
                                    </i>  Evaluaciones
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div id="page-content">
                    <div className="header">
                        <nav className="navbar-classic navbar navbar-expand-lg">
                            <a id="nav-toggle" href="/">
                                <i data-feather="menu" className="nav-icon me-2 icon-xs"></i>
                            </a>
                            <ul className="navbar-nav navbar-right-wrap ms-auto d-flex nav-top-wrap">
                                <li className="dropdown ms-2">
                                    <a className="rounded-circle" href="/" role="button" id="dropdownUser" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <div className="avatar avatar-md avatar-indicators avatar-online">
                                            <img alt="avatar" src="/media/img/logo-company.png" className="rounded-circle" />
                                        </div>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownUser">
                                        <div className="px-4 pb-0 pt-2">
                                            <div className="lh-1 ">
                                                <h5 className="mb-1"> {context.user}</h5>
                                            </div>
                                            <div className=" dropdown-divider mt-3 mb-2"></div>
                                        </div>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a className="dropdown-item" href="/logout">
                                                    <i className="me-2 icon-xxs dropdown-item-icon" data-feather="power"></i>Sign Out
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout;
