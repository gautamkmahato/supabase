import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../style/tab.css'

function Tab() {
    const [active, setactive] = useState(false)
    return (
        <div className='tab-container'>
            <div className='tab'>
                <div className='tab-nav' style={{}}>
                    <div>
                    <NavLink to="" onClick={(e) =>{setactive(false)}} style={({isActive}) => {return {backgroundColor: active ? 'rgb(241, 241, 241)' : 'white', color: active ? 'color: rgb(152, 152, 152)' : 'color: rgb(152, 152, 152)', textDecoration: active ? 'none' : 'none',marginLeft: active ? '10px' : '-20px', padding: active ? '15px 20px' : '15px 20px', borderTop: active ? 'none' : '2px solid rgb(255, 184, 184)'}}} className="content">Description</NavLink>
                    </div>
                    <div>
                    <NavLink className='tab-nav-item' to="solution" onClick={(e) =>{setactive(true)}} style={({isActive}) => {return {backgroundColor: isActive ? 'white' : '', textDecoration: isActive ? 'none' : 'none', padding: isActive ? '15px 20px' : '', borderTop: isActive ? '2px solid rgb(255, 184, 184)' : ''}}}>Solution</NavLink>
                    </div>
                    <div>
                    <NavLink className='tab-nav-item' to="notes" onClick={(e) =>{setactive(true)}} style={({isActive}) => {return {backgroundColor: isActive ? 'white' : '', textDecoration: isActive ? 'none' : 'none', padding: isActive ? '15px' : '', borderTop: isActive ? '2px solid rgb(255, 184, 184)' : ''}}}>Notes</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tab