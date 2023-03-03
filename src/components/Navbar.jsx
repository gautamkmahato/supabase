import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../auth/Auth';
import '../style/navbar.css'
import logo from '../assets/logo/logo1.png'
import { useRef } from 'react';
import supabase from '../configs/supabaseConfig';
import { useNavigate } from 'react-router-dom';


function Navbar() { 

    const [clickedOutside, setClickedOutside] = useState(false);
    const [display, setdisplay] = useState('none');
    const myRef = useRef(null);
    const navigate = useNavigate();

    const {user} = useContext(AuthContext); 

    const handleClickOutside = e => {
        //console.log(myRef.current)
        if (myRef.current && !myRef.current.contains(e.target)) {
            setClickedOutside(true);
        }
    };

    const handleClickInside = () => {
        setClickedOutside(false);
        setdisplay('block')
    }

    const getSignout = async() =>{
        const { error } = await supabase.auth.signOut(); 
        console.log(error);
        navigate("/login");
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });

  
    return (
        <div>
            <nav>
                <div className="left-item-section">
                    <a href="/" className="item"><img src={logo} alt="Logo" className="logo" /></a>
                </div>  
                <div className="middle-item-section">
                    <a href="/" className="item">Home</a>
                    <a href="/category" className="item">Category</a>
                    <a href="/problems" className="item">Problems</a>
                    <a href="/" className="item">Explore</a>
                    <a href="/" className="item">About</a>
                </div>
                <div className="right-item-section">
                
                    {user ?
                        <div>
                            <div className="circle" ref={myRef} onClick={handleClickInside} >
                                <span className="icon">{user.email.slice(0,2).toUpperCase()}</span>
                                {clickedOutside ? 
                                    <ul className='dropdown' style={{display: 'none'}}>
                                        <li>hello</li>
                                    </ul>
                                        : 
                                        <ul className='dropdown' style={{display: display}}>
                                        <li><i className="fa fa-user-circle-o"></i><a href="/dashboard">Profile</a></li>
                                        <li><i className="fa fa-cog"></i><a href="/logout">Settings</a></li>
                                        <li><i className="fa fa-sign-out"></i><a className='nav-logout' onClick={getSignout}>Logout</a></li>
                                    </ul>
                                }
                            </div>
                        </div>
                         :
                        <div>
                            <div className='item'>
                                <a href="/login">
                                    <span className="item-btn">Login</span>
                                </a>
                            </div>
                        </div>
                    }

                </div>
            </nav>
      </div>
    )
}

export default Navbar