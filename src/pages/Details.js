import { Outlet } from 'react-router-dom';
import Tab from '../components/Tab';
import '../style/details.css';

function Details() {
    return (
        <div>
        
        <Tab />

        <Outlet />
            
        </div>
    )
}

export default Details