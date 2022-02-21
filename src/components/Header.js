import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        Header
        <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
            <Nav.Item>
                <NavLink to="/" className="m-4  border bg-light">Home</NavLink>
            </Nav.Item>
            
            <Nav.Item>
                <NavLink to="/login" className="m-4  border bg-light">Login</NavLink>
            </Nav.Item>
            
            <Nav.Item>
                <NavLink to="/register" className="m-4  border bg-light">Register</NavLink>
            </Nav.Item>
            
            <Nav.Item>
                <NavLink to="/get_student/1" className="m-4 border bg-light"> Students</NavLink>
            </Nav.Item>
        </Nav>
    </div>
  )
}
