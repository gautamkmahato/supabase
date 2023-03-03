import { useState, useEffect, createContext } from 'react';
import supabase from '../configs/supabaseConfig';

// create a context for authentication
const AuthContext = createContext(); 

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [session, setSession] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const setData = async () => {
            const { data: { session }, error } = await supabase.auth.getSession();
            if (error) throw error;
            setSession(session)
            setUser(session?.user)
            setLoading(false);
            console.log(session)
        };

        const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
            setSession(session);
            setUser(session?.user)
            setLoading(false);
            console.log(event, session)
        });

        setData();

        return () => {
            listener?.subscription.unsubscribe();
        };
    }, []);

    const value = {
        session,
        user,
        signOut: () => supabase.auth.signOut(),
    };

    // use a provider to pass down the value
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

// export the useAuth hook
// export const useAuth = () => {
//     return useContext(AuthContext);
// };

export { AuthContext, AuthProvider };