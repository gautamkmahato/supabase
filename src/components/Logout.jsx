import React from 'react'
import { useNavigate } from 'react-router-dom';
import supabase from '../configs/supabaseConfig';

function Logout() {

    const navigate = useNavigate();

    const getSignout = async() =>{ 
        const { error } = await supabase.auth.signOut(); 
        console.log(error);
        navigate("/login");
    }

    return (
        <>
            <button>Lo</button>
        </>
    )
}

export default Logout