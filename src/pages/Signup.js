import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import supabase from '../configs/supabaseConfig';
import '../style/signup.css'
import Home from './Home';

function Signup() {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState(''); 
    const [loading, setloading] = useState(false);
    const [session, setSession] = useState(); 

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            setloading(true);
            const { error } = await supabase.auth.signUp({
                email: email,
                password: password,
            })
            if(error){
                alert(error);
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
            {!session ? <div>
                <div className='signup-form'>
                    <h2>Get started</h2>
                    <p className='signup-para'>Create a new account</p>
                    <form onSubmit={handleSubmit}>
                        <label className='signup-label'>Email</label>
                        <input type="text" value={email} onChange={(e)=> {setemail(e.target.value)}} />
                        <label className='signup-label'>Password</label>
                        <input type="text" value={password} onChange={(e)=> {setpassword(e.target.value)}} />
                        {loading ? <button className='signup-btn' style={{cursor: "not-allowed", opacity: "0.6"}}>Sign Up</button> : <button className='signup-btn'>Sign Up</button>}
                    </form>
                    <p className='signup-form-msg-para'><span className='signup-msg'>Already have an account? </span><NavLink to="/login" style={{color: "white"}}>Login</NavLink> </p>
                </div>
            </div> : <Home /> }
        </>
    )
}

export default Signup