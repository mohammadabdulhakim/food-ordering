import React from 'react'
import Navbar from './Navbar';
import Logo from './Logo';

const Header = () => {
  return (
    <header>
        <div className="container flex items-center justify-between py-6">
            <Logo />
            <Navbar />
        </div>
    </header>
  )
}

export default Header