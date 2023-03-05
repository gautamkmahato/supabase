import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import supabase from '../configs/supabaseConfig';
import '../style/login.css'
import Home from './Home';

function Login() {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [session, setSession] = useState(); 
    const [loading, setloading] = useState(false);
    
    const navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            setloading(true);
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            })
            //console.log(data.session);
            //console.log(error);
            
            if(data.session){
                navigate("/")
            }
            else{
                alert(error)
            }
        } catch(error){
            console.log(error)
        } finally{
            setloading(false);
        }
    }

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
          setSession(session)
        })
    
        supabase.auth.onAuthStateChange((_event, session) => {
          setSession(session)
        })
    }, []);

    return (
        <>
            {!session ? <div className='login-container'>
                <div className='login-form'>
                    <h2>Welcome back</h2>
                    <p className='login-para'>Sign in to your account</p>
                    <form onSubmit={handleSubmit}>
                        <label className='login-label'>Email</label>
                        <input type="text" value={email} onChange={(e)=> {setemail(e.target.value)}} />
                        <label className='login-label'>Password</label>
                        <input type="text" value={password} onChange={(e)=> {setpassword(e.target.value)}} />
                        {loading ? <button className='login-btn' style={{cursor: "not-allowed", opacity: "0.6"}}>Login</button> : <button className='login-btn'>Login</button>}
                    </form>
                    <p className='login-form-msg-para'><span className='login-msg'>Dont have an account? </span><NavLink to="/signup" style={{color: "white"}}>SignUp</NavLink> </p>
                    
                </div>
            </div> : <Home />}
        </>
      
    )
}

export default Login