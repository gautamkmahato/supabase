import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotLoggedIn() {
    const navigate = useNavigate();
    return (
        <div>
            <div style={{width: "20%", marginLeft: "40%", marginRight: "40%", marginTop: "50px", padding: "10px"}}>
                <h3>Not Logged In</h3>
                <p>Click here to login</p>
                <button onClick={()=> {navigate("/login")}}>Login</button>
            </div>
        </div>
    )
}

export default NotLoggedIn