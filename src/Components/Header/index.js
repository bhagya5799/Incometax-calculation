import React from 'react'

import './index.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <Link to="/">
                    <img src="https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2020/07/14/124255-income-tax-department-pixabay.jpg?itok=8hCFW7JB&c=c5af8c0f92ccc8e249257bf0f1cb18e8" height="60px" width="100px" alt="logo" />
                </Link>
                <Link to="/cal">
                    <button className='login btn'>Login</button>
                </Link>
                <Link to="/cal">
                    <button className='logout btn'>Logout</button>
                </Link>
            </nav>
        </div>
    )
}

export default Header