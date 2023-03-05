import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import supabase from '../configs/supabaseConfig';
import '../style/loader.css'

function Problems() {

    const imgUrlDB = {
        Amazon: `https://lanbtferudsqjlmnbifi.supabase.co/storage/v1/object/public/imagedb/amazon.png`,
        Google: `https://lanbtferudsqjlmnbifi.supabase.co/storage/v1/object/public/imagedb/google.png`,
        Microsoft: `https://lanbtferudsqjlmnbifi.supabase.co/storage/v1/object/public/imagedb/microsoft.png`,
        Meta: `https://lanbtferudsqjlmnbifi.supabase.co/storage/v1/object/public/imagedb/facebook.png`,
        Netflix: `https://lanbtferudsqjlmnbifi.supabase.co/storage/v1/object/public/imagedb/netflix.png`,
    };

    const [prob, setprob] = useState([]); 
    const [loading, setloading] = useState(false);

    const navigate = useNavigate();
  
    useEffect(() => {
        const fetchData = async() =>{
            setloading(true);
            let { data, error } = await supabase.from('Questions').select('*')

            if(error){
                console.log(error)
            }
            else{
                setprob(data);
                //console.log(data)
                setloading(false)
            }
        }
        fetchData();
    }, []);

    const handleCompany = (res) =>{
        const obj2 = JSON.parse(res)
        //console.log(res)
        //setcompany(obj2.value)
        return obj2.value;
    }

    const getCompany = (companyName) =>{
        if(companyName === 'Amazon'){
            return imgUrlDB.Amazon;
        }
        else if(companyName === 'Meta'){
            return imgUrlDB.Meta;
        }
        else if(companyName === 'Google'){
            return imgUrlDB.Google;
        }
        else if(companyName === 'Microsoft'){
            return imgUrlDB.Microsoft;
        }
        else if(companyName === 'Netflix'){
            return imgUrlDB.Netflix;
        }
    }

    return (
        <>
            {loading ? <div className='loader'></div> : 
                <div className='problems-table'>
                    <h3 style={{marginLeft: "10%"}}>All Questions</h3>
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
                            {prob && prob.map((val) =>(
                                <tr key={val.id} >
                                    <td style={{fontSize:"15px", color:"#262626", fontFamily: "'Mulish', sans-serif"}}>{val.id}</td>
                                    <td style={{fontSize:"15px", color:"#262626", textDecoration: "none", fontFamily: "'Mulish', sans-serif"}} >
                                        <p className='problem-title' onClick={()=>navigate(`/users/${val.id}`)}>{val.title}</p>
                                    </td>
                                    <td style={{fontSize:"15px", color:'#262626', fontFamily: "'Mulish', sans-serif"}}>
                                        {val.difficulty}
                                    </td>
                                    <td style={{fontSize:"15px", color:"#262626", fontFamily: "'Mulish', sans-serif"}}>{val.category}</td>
                                    <td className='company' style={{paddingBottom: "6px", paddingTop: "8px"}}>
                                    
                                    {val.company.map((res, index) =>(
                                        <div key={index}>
                                            <img src={getCompany(handleCompany(res))} alt="" />
                                        </div>
                                    ))}

                        
                                    </td>
                                </tr>            
                            ))}
                        </tbody>
                    </table>
                </div>
            }
        </>
    )
}

export default Problems