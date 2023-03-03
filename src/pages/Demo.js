import React, { useEffect } from 'react'
import supabase from '../configs/supabaseConfig';

function Demo() {

    // const [user, setuser] = useState()
    // useEffect(() =>{
        
    // },[]);

    // const getSession = async() =>{ 
    //     const { data: { user } } = await supabase.auth.getUser(); 
    //       if(!user){
    //         console.log(user);
    //         return <h3>Not Not</h3>
    //       }
    //     }
    //   getSession();

    useEffect(() =>{
        const getSession = async () =>{
            const { data: { session }, error } = await supabase.auth.getSession();
            console.log(session)
            console.log(session.user)
            console.log(error)
        }
        getSession()
    },[]);

    return (
        <div>
            <h1>Demo page</h1>
        </div>
    )
}

export default Demo


