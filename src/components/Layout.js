import React from 'react'
import './layout.css'
import Navbar from './Navbar'

const Layout = ({children}) => {
    return (
        <>  
            <Navbar />
            <main>
                {children}
            </main>
            <footer>@COPYRIGHT 2021. ALL RIGHTS RESERVED.</footer>
        </>
    )
}

export default Layout
