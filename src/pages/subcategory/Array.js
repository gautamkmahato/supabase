import React from 'react'
import Card from '../../components/Card'

function Array() {
    const imgUrlDB = {
        img4: `https://lanbtferudsqjlmnbifi.supabase.co/storage/v1/object/public/imagedb/back23.jpg`,
    };

    return (
        <div> 
            <div className="card-container">
                <Card img={imgUrlDB.img4} title='Array' link="/problems/array" subcategory='array'/>
                <Card img={imgUrlDB.img4} title='Sliding Window' link="/problems/array" subcategory='sliding window'/>
                <Card img={imgUrlDB.img4} title='Two Pointers' link="/problems/array" subcategory='two pointers' />
                <Card img={imgUrlDB.img4} title='Three Pointers' link="/problems/array" subcategory='three pointers' />
            </div>
        </div>
    )
}

export default Array