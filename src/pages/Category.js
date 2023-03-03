import React from 'react'
import Card from '../components/Card'


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

    // const getSignout = async() =>{
    //     const { error } = await supabase.auth.signOut(); 
    //     console.log(error);
    //     navigate("/login");
    // }

    // useEffect(() =>{
    //   const getSession = async() =>{ 
    //     const { data: { user } } = await supabase.auth.getUser(); 
    //       if(!user){
    //         console.log(user);
    //         return <h3>Hello</h3>
    //       }else{
    //         setuser(user);
    //       }
    //     }
    //   getSession();
    // },[]);

    


    return (
        <div>
            {/* {Object.keys(user).length !== 0 ? <button onClick={()=>{getSignout()}}>sign out</button> : <></>} */}
            <div className="card-container">
                <Card title="Algorithms" img={imgUrlDB.img1} link="/problems/algorithms" subcategory='' />
                <Card title="Array" img={imgUrlDB.img2} link="/problems/array" subcategory='' />
                <Card title="Binary Search" img={imgUrlDB.img3} link="/problems/binary-search" subcategory='' />
                <Card title="Dynamic Programming" img={imgUrlDB.img4} link="/problems/dynamic-programming" subcategory='' />
                <Card title="Graph" img={imgUrlDB.img5} link="/problems/graph" subcategory='' />
                <Card title="Linked List" img={imgUrlDB.img6} link="/problems/linked-list" subcategory='' />
                <Card title="Maths" img={imgUrlDB.img12} link="/problems/maths" subcategory='' />
                <Card title="Queue" img={imgUrlDB.img7} link="/problems/queue" subcategory=''/>
                <Card title="Recursion & Backtracking" img={imgUrlDB.img8} link="/problems/recursion-backtracking" subcategory='' />
                <Card title="Sorting" img={imgUrlDB.img13} link="/problems/sorting" subcategory='' />
                <Card title="Stack" img={imgUrlDB.img9} link="/problems/stack" subcategory='' />
                <Card title="String" img={imgUrlDB.img10} link="/problems/string" subcategory='' />
                <Card title="Tree" img={imgUrlDB.img11} link="/problems/tree" subcategory='' />
                
                
            </div>
        </div>
    )
}

export default Category