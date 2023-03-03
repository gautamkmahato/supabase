import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import supabase from '../configs/supabaseConfig';
import '../style/loader.css'

function SubProblems(props) {

    const [prob, setprob] = useState([]); 
    const [loading, setloading] = useState(false);

    const {subcategory, link} = useParams(); 

    console.log(link, subcategory)

    const navigate = useNavigate();
  
    useEffect(() => {
        const fetchData = async() =>{
            setloading(true)
            let { data, error } = await supabase
            .from('Questions')
            .select('*')
            .eq('category', link)
            .eq('subcategory', subcategory)

        if(error){
            console.log(error)
        }
        else{
            setprob(data);
            setloading(false);
        }
        }
        fetchData();
    }, [link, subcategory]);

    return (
        <div className='problems-table'>
            <h3 style={{marginLeft: "10%"}}>All Questions</h3>
            {loading ? <div className='loader'></div> : 
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Defficulty</th>
                            <th>Category</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prob.map((val) =>(
                            <tr key={val.id}>
                                <td>{val.id}</td>
                                <td onClick={()=>navigate(`/users/${val.id}`)} style={{cursor: "pointer", textDecoration: "underline"}}>{val.title}</td>
                                <td>{val.difficulty}</td>
                                <td>{val.category}</td>
                                <td>{val.company}</td>
                            </tr>            
                        ))}
                    </tbody>
                </table>
            }
        </div>
    )
}

export default SubProblems