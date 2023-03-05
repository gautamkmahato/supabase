import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import supabase from '../configs/supabaseConfig';


function Category() {

    //const [user, setuser] = useState('');
    //const navigate = useNavigate();

    const imgUrlDB = {
        img1: `https://lanbtferudsqjlmnbifi.supabase.co/storage/v1/object/public/imagedb/back22.jpg`,
        img2: `https://lanbtferudsqjlmnbifi.supabase.co/storage/v1/object/public/imagedb/back23.jpg`,
        img3: `https://lanbtferudsqjlmnbifi.supabase.co/storage/v1/object/public/imagedb/back26.jpg`,
        img4: `https://lanbtferudsqjlmnbifi.supabase.co/storage/v1/object/public/imagedb/back28.jpg`,
        img5: `https://lanbtferudsqjlmnbifi.supabase.co/storage/v1/object/public/imagedb/back31.jpg`,
        img6: `https://lanbtferudsqjlmnbifi.supabase.co/storage/v1/object/public/imagedb/back34.jpg`,
        img7: `https://lanbtferudsqjlmnbifi.supabase.co/storage/v1/object/public/imagedb/back37.jpg`,
        img8: `https://lanbtferudsqjlmnbifi.supabase.co/storage/v1/object/public/imagedb/back39.jpg`,
        img9: `https://lanbtferudsqjlmnbifi.supabase.co/storage/v1/object/public/imagedb/back40.jpg`,
        img10: `https://lanbtferudsqjlmnbifi.supabase.co/storage/v1/object/public/imagedb/back41.jpg`,
        img11: `https://lanbtferudsqjlmnbifi.supabase.co/storage/v1/object/public/imagedb/back46.jpg`,
        img12: `https://lanbtferudsqjlmnbifi.supabase.co/storage/v1/object/public/imagedb/back47.jpg`,
        img13: `https://lanbtferudsqjlmnbifi.supabase.co/storage/v1/object/public/imagedb/back48.jpg`,
    };

    const [array, setarray] = useState(0);
    const [algorithms, setalgorithms] = useState(0);
    const [binarySearch, setbinarySearch] = useState(0);
    const [dynamicProgramming, setdynamicProgramming] = useState(0);
    const [graph, setgraph] = useState(0);
    const [linkedList, setlinkedList] = useState(0);
    const [math, setmath] = useState(0);
    const [queue, setqueue] = useState(0);
    const [recursionBacktracking, setrecursionBacktracking] = useState(0);
    const [sorting, setsorting] = useState(0);
    const [stack, setstack] = useState(0);
    const [string, setstring] = useState(0);
    const [tree, settree] = useState(0);

    useEffect(() =>{ 
        const getdata = async() =>{
            let { data, error } = await supabase
            .rpc('get_new')
          
            if (error) console.error(error)
            else{
                data.forEach((currValue) =>{
                    if(currValue.category === 'array'){
                        setarray(currValue.countt);
                    }
                    if(currValue.category === 'algorithms'){
                        setalgorithms(currValue.countt);
                    }
                    if(currValue.category === 'binary-search'){
                        setbinarySearch(currValue.countt);
                    }
                    if(currValue.category === 'dynamic-programming'){
                        setdynamicProgramming(currValue.countt);
                    }
                    if(currValue.category === 'graph'){
                        setgraph(currValue.countt);
                    }
                    if(currValue.category === 'linked-list'){
                        setlinkedList(currValue.countt);
                    }
                    if(currValue.category === 'maths'){
                        setmath(currValue.countt);
                    }
                    if(currValue.category === 'queue'){
                        setqueue(currValue.countt);
                    }
                    if(currValue.category === 'recursion-backtracking'){
                        setrecursionBacktracking(currValue.countt);
                    }
                    if(currValue.category === 'sorting'){
                        setsorting(currValue.countt);
                    }
                    if(currValue.category === 'stack'){
                        setstack(currValue.countt);
                    }
                    if(currValue.category === 'string'){
                        setstring(currValue.countt);
                    }
                    if(currValue.category === 'tree'){
                        settree(currValue.countt);
                    }
                })
            }
        }
        getdata()

    },[])

    return (
        <div>
            {/* {Object.keys(user).length !== 0 ? <button onClick={()=>{getSignout()}}>sign out</button> : <></>} */}
            <h3 style={{marginLeft: "7%", marginTop:"30px" }}>All Category</h3>
            <div className="card-container">
                <Card title="Algorithms" img={imgUrlDB.img1} link="/problems/algorithms" subcategory='' totalCount={algorithms} />
                <Card title="Array" img={imgUrlDB.img2} link="/problems/array" subcategory='' totalCount={array} />
                <Card title="Binary Search" img={imgUrlDB.img3} link="/problems/binary-search" subcategory='' totalCount={binarySearch} />
                <Card title="Dynamic Programming" img={imgUrlDB.img4} link="/problems/dynamic-programming" subcategory='' totalCount={dynamicProgramming} />
                <Card title="Graph" img={imgUrlDB.img5} link="/problems/graph" subcategory='' totalCount={graph} />
                <Card title="Linked List" img={imgUrlDB.img6} link="/problems/linked-list" subcategory='' totalCount={linkedList} />
                <Card title="Maths" img={imgUrlDB.img12} link="/problems/maths" subcategory='' totalCount={math} />
                <Card title="Queue" img={imgUrlDB.img7} link="/problems/queue" subcategory='' totalCount={queue}/>
                <Card title="Recursion & Backtracking" img={imgUrlDB.img8} link="/problems/recursion-backtracking" subcategory='' totalCount={recursionBacktracking} />
                <Card title="Sorting" img={imgUrlDB.img13} link="/problems/sorting" subcategory='' totalCount={sorting} />
                <Card title="Stack" img={imgUrlDB.img9} link="/problems/stack" subcategory='' totalCount={stack} />
                <Card title="String" img={imgUrlDB.img10} link="/problems/string" subcategory='' totalCount={string} />
                <Card title="Tree" img={imgUrlDB.img11} link="/problems/tree" subcategory='' totalCount={tree} />    
            </div>
        </div>
    )
}

export default Category