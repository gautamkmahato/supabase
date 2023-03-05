import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/Auth";



const ProtectedRoute = ({ children }) => {
    const {user} = useContext(AuthContext); 
    //console.log(user.email)
    if (!user) {
        // user is not authenticated
        return <Navigate to="/login" />;
    }
    return <>{children}</>
};

export default ProtectedRoute