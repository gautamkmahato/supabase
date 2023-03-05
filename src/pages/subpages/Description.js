import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import supabase from '../../configs/supabaseConfig';

function Description() {

    const imgUrlDB = {
        Amazon: `https://lanbtferudsqjlmnbifi.supabase.co/storage/v1/object/public/imagedb/amazon.png`,
        Google: `https://lanbtferudsqjlmnbifi.supabase.co/storage/v1/object/public/imagedb/google.png`,
        Microsoft: `https://lanbtferudsqjlmnbifi.supabase.co/storage/v1/object/public/imagedb/microsoft.png`,
        Meta: `https://lanbtferudsqjlmnbifi.supabase.co/storage/v1/object/public/imagedb/facebook.png`,
        Netflix: `https://lanbtferudsqjlmnbifi.supabase.co/storage/v1/object/public/imagedb/netflix.png`,
    };

    const [arr, setarr] = useState([]);
    const [errorTag, seterrorTag] = useState();
    const [platform, setplatform] = useState();
    const [color1, setcolor1] = useState();
    const [textColor, settextColor] = useState();
    const [bgColor, setbgColor] = useState();

    const { id } = useParams();

    useEffect(() =>{
        const getById = async() =>{         
            let { data, error } = await supabase
            .from('Questions')
            .select('*')
            .eq('id',id)

            if(error){
                //console.log(error);
                seterrorTag("Something went wrong...")
            }
            if(data){
                //console.log(data)
                setarr(data);
                //console.log(data[0].input_output[0].input)
                //console.log(data[0].platform)
                const obj = JSON.parse(data[0].platform)
                //console.log(obj.value)
                //console.log(data[0].company[0])
                // const obj2 = JSON.parse(data[0].company[0])
                // console.log(obj2.value)
                //console.log(data[0].difficulty)
                setplatform(obj.value);
                getColor(obj.value);
                getDifficultyColor(data[0].difficulty);
                seterrorTag(null);
            }
        }
        getById();
    },[id])

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

    const getColor = (record) =>{
        //console.log(record)
        if(record === 'CodeStudio'){
            setcolor1('#D84F00');
        }
        else if(record === "Leetcode"){
            setcolor1('yellow');
        }
        else if(record === "GeeksForGeeks"){
            setcolor1('#FF006E');
        }
    }

    const getDifficultyColor = (record) =>{
        if(record === 'Easy'){
            settextColor('#00AF9B');
            setbgColor('#D3FEC0');
        }
        else if(record === 'Medium'){
            settextColor('#FFB800');
            setbgColor('#FEECB2');
        }
        else if(record === 'Hard'){
            settextColor('#FF006E');
            setbgColor('#FEB2CF');
        }
    }

    const handleCompany = (res) =>{
        const obj2 = JSON.parse(res)
        //console.log(obj2.value)
        //setcompany(obj2.value)
        return obj2.value;
    }

    return (
        <div className='desc-container'>
            { !errorTag && arr.map((val, index) => (
                <div key={index}>
                    <div className="post-container">
                        <div className="section-1">
                            <p>{val.title}</p>
                        </div>
                        <div className="section-2">
                            <div className='difficulty'>
                                <p style={{backgroundColor: bgColor, color: textColor}}>{val.difficulty}</p>
                            </div>
                            <div className='category'>
                                <p>{val.category}</p>
                            </div>
                            <div className='platform'>
                                <a href={val.platform_url} rel="noreferrer" target='_blank'>
                                    <p style={{ border: `2px solid ${color1}`, paddingRight:"10px"}}><i className="fa fa-caret-square-o-right">{"  "+platform}</i></p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='company'>
                        {val.company && val.company.map((res, index) =>(
                            <div key={index}>
                                <img src={getCompany(handleCompany(res))} alt="" />
                            </div>
                        ))}
                    </div>
                    <div>
                        {val.description != null ? <p style={{fontSize: "17px", lineHeight: "1.75rem", color: "#333"}}>{val.description}</p> : <p>Not found</p>}
                    </div>
                    <div>
                        {val.input_output && val.input_output.map((res, index) =>(
                            <div key={index}>
                                <div>
                                    <p style={{fontWeight: "600"}}>Example {index+1}</p>
                                </div>
                                <div className='input_output'>
                                    <p><span style={{fontWeight: 600}}>Input:</span> {res.input}</p>
                                    <p><span style={{fontWeight: 600}}>Output:</span> {res.output}</p>
                                    <p><span style={{fontWeight: 600}}>Explanation:</span> {res.explanation}</p>
                                </div>
                            </div> 
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Description