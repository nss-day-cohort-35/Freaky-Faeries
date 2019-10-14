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
            <nav id="header" className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills nav-fill">
                    {/* <li><span className="nav-link" >Logout</span></li> */}
                    <img id="logoutPic" onClick={this.handleLogout} src={require('./logo-01.png')} alt="My Dog" />
                </ul>
            </nav>
        )
    }
}

export default Header;