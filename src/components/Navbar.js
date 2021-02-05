import React from 'react'
import { navbar } from './navbar.module.css'

const Navbar = () => {
    return (
        <nav className={navbar}>
            <h1>mel king</h1>
            <ul className='menu'>
                <li>about</li>
                <li>books</li>
                <li>contact</li>
            </ul>
        </nav>
    )
}

export default Navbar
