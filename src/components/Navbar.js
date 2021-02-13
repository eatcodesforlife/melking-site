import React from 'react'
import { navbar , active} from './navbar.module.css'
import { Link } from 'gatsby'


const links = [
    {
        id: 1,
        url: '/',
        menuText: 'home'
    },
    {
        id: 2,
        url: '/author',
        menuText: 'author'
    },
    {
        id: 3,
        url: '/books',
        menuText: 'books'
    },
    {
        id: 4,
        url: '/contact',
        menuText: 'contact'
    },
]

const Navbar = () => {

    
    return (
        <div>
            <nav className={navbar}>
                <Link to='/'>
                    <h1>mel king</h1>
                </Link>
                <ul>
                    {
                        links.map( ({ id, url, menuText }) => (
                            <li key={id}>
                                <Link to={url} activeClassName={active}>
                                    {menuText}
                                </Link>
                            </li>        
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
