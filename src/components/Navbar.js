import React from 'react'
import { navbar } from './navbar.module.css'
import { Link } from 'gatsby'

const Navbar = () => {

    
    return (
        <div>
            <nav className={navbar}>
                <Link to='/'>
                    <h1>mel king</h1>
                </Link>
                <ul>
                    <li>                    
                        <Link to='/' >home</Link>
                    </li>
                    <li>                    
                        <Link to='/author' >author</Link>
                    </li>
                    <li>
                        <Link to='/books' >books</Link>
                    </li>
                    <li>
                        <Link to='/contact' >contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
