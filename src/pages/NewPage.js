import React, { useState } from 'react';
import Select from 'react-select'
import supabase from '../configs/supabaseConfig';
import categoryAPI from '../configs/categoryData'
import companyAPI from '../configs/companyData';
import platformAPI from '../configs/platformData';
import '../style/form.css'

function NewPage() {

    const[category, setcategory] = useState('');
    const[subcategory, setsubcategory] = useState('');
    const[difficulty, setdifficulty] = useState('');
    const[title, setTitle] = useState('');
    const[description, setdescription] = useState('');
    const[company, setcompany] = useState(null);
    const[platform, setplatform] = useState('');
    const[formError, setformError] = useState(null);
    const[arr, setarr] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [inputOutput, setinputOutput] = useState(null);
    const [url, seturl] = useState(null);


    const handleCategory = (e) =>{
        setcategory(e.target.value);
        getsubCategory(e.target.value)
    }
	
	const getsubCategory = (category) =>{
        let result = categoryAPI.filter(function (el){
            return el.category === category
        });
        setarr(result)
    }

    const handleSubCategory = (e) =>{
        setsubcategory(e.target.value);
    }

    const handleDifficulty = (e) =>{
        setdifficulty(e.target.value);
    }

    const handlePlatform = (selectedOption) =>{
        console.log(selectedOption);
        setSelectedOption(selectedOption)
    }

    const handleCompany = (selectedOption) =>{
        console.log(selectedOption);
        setcompany(selectedOption)
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();

        if(!title || !description || !company){
            setformError("Please provide all the data");
            return;
        }
        console.log(title,description,difficulty,category,subcategory,company,platform);
        
        const { data, error } = await supabase
        .from('Questions')
        .insert([{ title,description,difficulty,category,subcategory,company: company, platform: selectedOption, input_output: inputOutput, platform_url: url}])
        .select()

        if(error){
            console.log(error) 
            setformError("Error in input...")
        }
        if(data){
            console.log(data);
            setformError(null)
        }

    }

    return (
        <div className='form-container'>
            <h3>{formError}</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
            <ul className='form-ul'>
                <li>
                    <label>Title</label>
                    <input type="text" onChange={(e) => {setTitle(e.target.value)}} placeholder="Enter Title" />
                </li>
                <li>
                    <label>Description</label>
                    <textarea className='textarea' onChange={(e) => {setdescription(e.target.value)}} placeholder="Enter Description" />
                </li>
                <li>
                    <label>Difficulty</label>
                    <select onChange={(e) => handleDifficulty(e)}>
                        <option>Select Difficulty</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </li>
                <li>
                    <label>Category</label>
                    <select name='category' onChange={(e) => handleCategory(e)}>
                        <option value="">Select Category</option>
                        <option value="algorithms">Algorithms</option>
                        <option value="array">Array</option>
                        <option value="binary-search">Binary Search</option>
                        <option value="dynamic-programming">Dynamic Programming</option>
                        <option value="graph">Graph</option>
                        <option value="linked-list">Linked List</option>
                        <option value="maths">Maths</option>
                        <option value="queue">queue</option>
                        <option value="recursion-backtracking">Recursion Backtracking</option>
                        <option value="sorting">Sorting</option>
                        <option value="stack">Stack</option>
                        <option value="string">String</option>
                        <option value="tree">Tree</option>
                    </select>
                </li>
                <li>
                    <label>Subcategory</label>
                    <select name='subcategory' onChange={(e) => handleSubCategory(e)}>
                        <option>Select Subcategory</option>
                            {arr.map((val, index) =>(
                                <option key={index} value={val.subcategory}>{val.subcategory}</option>
                            ))}
                    </select>
                </li>
                {/* <li>
                    <label>Company</label>
                    <select name='company' onChange={(e) => {setcompany(e.target.value)}}>
                        <option>Select Company</option>
                            {companyAPI.map((val, index) =>(
                                <option key={index} value={val}>{val}</option>
                            ))}
                    </select>
                </li> */}
                {/* <li>
                    <label>Platform</label>
                    <select name='platform' onChange={(e) => {setplatform(e.target.value)}}>
                        <option>Select Platform</option>
                            {platformAPI.map((val, index) =>(
                                <option key={index} value={val}>{val}</option>
                            ))}
                    </select>
                </li> */}
                <li>
                    <label>Company</label>
                    <Select isMulti options={companyAPI} defaultValue={company} onChange={handleCompany} />
                </li>
                <li>
                    <label>Input Output</label>
                    <textarea className='textarea' onChange={(e) => {setinputOutput(e.target.value)}} placeholder="Enter Description" />
                </li>
                <li>
                    <label>Platform</label>
                    <Select options={platformAPI} defaultValue={selectedOption} onChange={handlePlatform} />
                </li>
                <li>
                    <label>URL</label>
                    <input type="text" onChange={(e) => {seturl(e.target.value)}} placeholder="Enter URL" />
                </li>
                <li>
                    <button>Submit</button>
                </li>
            </ul>
            </form>
        </div>
    )
}

export default NewPage