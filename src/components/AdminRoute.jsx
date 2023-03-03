import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/Auth";

function AdminRoute({ children }) {
    const {user} = useContext(AuthContext); 
    console.log(user)
    //if (!user) {
        if(user?.email !== process.env.REACT_APP_ADMIN){
            console.log("inside adminroute")
            // user is not authenticated
            return <Navigate to="/signup" />;
        }
        
    //}
    return <>{children}</>

}

export default AdminRoute