import React, { useEffect, useState } from 'react'
import supabase from '../configs/supabaseConfig';

function Profile() {

    const [user, setuser] = useState('');

    useEffect(() =>{
        const getSession = async () =>{
            const { data: { session }, error } = await supabase.auth.getSession();
            console.log(session)
            console.log(session.user?.email); 
            setuser(session.user?.email);
            console.log(error)
        }
        getSession()
    },[]);

    return (
        <>
            <h3>Welcome : {user}</h3>
        </>
    )
}

export default Profile