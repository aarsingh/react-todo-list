import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
 // background: '#333',
  background: '#4bd8c4',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  borderRadius: '5px',
  marginBottom: '2rem'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;