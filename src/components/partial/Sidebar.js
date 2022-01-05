import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/AdminLTELogo.png";
class Sidebar extends Component {
    render() {
        return (
            <div>
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    <a href="index3.html" className="brand-link">
                        <img src={logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                        <span className="brand-text font-weight-light">AdminLTE</span>
                    </a>
                    <div className="sidebar">
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                <li className="nav-item">
                                    <NavLink to="/admin" className="nav-link">
                                        <i className="nav-icon fas fa-tachometer-alt" />
                                        <p>Dashboard</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/admin/users" className="nav-link">
                                        <i className="nav-icon fas fa-user" />
                                        <p>Users</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>
            </div>
        )
    }
}


export default Sidebar;