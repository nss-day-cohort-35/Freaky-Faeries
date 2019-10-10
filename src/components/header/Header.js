import React, { Component } from "react"
// import { Link } from "react-router-dom"
import './Header.css'
import "bootstrap/dist/css/bootstrap.min.css"


class Header extends Component {
    handleLogout = () => {
        this.props.clearUser();
    }
    render() {
        return (
            <nav>
                <ul className="nav nav-pills nav-fill">
                    <li><span className="nav-link" onClick={this.handleLogout}>Logout</span></li>
                </ul>
            </nav>
        )
    }
}

export default Header;