import React from 'react'
import './layout.css'
import Navbar from './Navbar'

const Layout = ({children}) => {
    return (
        <div>  
            <Navbar />
            <main>
                {children}
            </main>
            <footer>@COPYRIGHT 2021. ALL RIGHTS RESERVED.</footer>
        </div>
    )
}

export default Layout
