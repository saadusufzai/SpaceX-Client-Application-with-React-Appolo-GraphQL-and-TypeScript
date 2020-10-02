import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'
const Header = () => {
  
    return (
        <div  className='header'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/SpaceX-Logo.svg" alt=""/>
            <ul>
                <li><Link to='./'>Launches</Link></li>
                <li><Link to='./rockets'>Rockets</Link></li>
                <li><Link to='./ships'>Ships</Link></li>
                <li><Link to='./company'>Company</Link></li>
            </ul>
        </div>
    )
}

export default Header
