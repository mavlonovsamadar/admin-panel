import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavbarRoute = () => {
    return (
        <>
            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Link style={{textDecoration: "none", }} to="/home"> <li style={{color: "#000", paddingTop: "10px" }}>Home</li>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                <Link style={{textDecoration: "none", }} to="/create"> <li style={{color: "#000", paddingTop: "10px" }}>Create Data</li>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                <Link style={{textDecoration: "none", }} to="/table"> <li style={{color: "#000", paddingTop: "10px" }}>Table List</li>
                    </Link>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default NavbarRoute