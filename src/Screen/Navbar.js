import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand} from 'reactstrap';

class Header extends React.Component {
    render(){
        return(
            <div>
                <Navbar className="navbar shadow p-3 mb-5 bg-white rounded" color="light" light expand="md">
                    <div className="container">
                        <NavbarBrand className="navbarBrand" href="/"><b>BOOK</b> </NavbarBrand>
                    </div>
                </Navbar>
            </div>
        )
    }
}
export default Header  