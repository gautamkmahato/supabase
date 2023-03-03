import React from 'react'
import Card from '../../components/Card'

function Dynamic() {
    const imgUrlDB = {
        img4: `https://lanbtferudsqjlmnbifi.supabase.co/storage/v1/object/public/imagedb/back28.jpg`,
    };

    return (
        <div> 
            <div className="card-container">
                <Card img={imgUrlDB.img4} title='Fabonacci Series' link="/problems/dynamic-programming" subcategory='fabonacci series'/>
                <Card img={imgUrlDB.img4} title='0/1 Knapsack' link="/problems/dynamic-programming" subcategory='01 knapsack'/>
                <Card img={imgUrlDB.img4} title='Frog Jump' link="/problems/dynamic-programming" subcategory='frog jump' />
                <Card img={imgUrlDB.img4} title='Target Sum' link="/problems/dynamic-programming" subcategory='target sum' />
                <Card img={imgUrlDB.img4} title='Unbounded Knapsack' link="/problems/dynamic-programming" subcategory='unbounded sum' />
                <Card img={imgUrlDB.img4} title='subset Sum' link="/problems/dynamic-programming" subcategory='fabonacci series'/>
                <Card img={imgUrlDB.img4} title='Longest Common subsequence' link="/problems/dynamic-programming" subcategory='longest common subsequence'/>
                <Card img={imgUrlDB.img4} title='Longest Common substring' link="/problems/dynamic-programming" subcategory='longest common substring' />
                <Card img={imgUrlDB.img4} title='Longest Increasing subsequence' link="/problems/dynamic-programming" subcategory='longest increasing subsequence' />
                <Card img={imgUrlDB.img4} title='Best time to buy and Sell' link="/problems/dynamic-programming" subcategory='best time to buy and sell' />
                <Card img={imgUrlDB.img4} title='Linear DP' link="/problems/dynamic-programming" subcategory='linear DP' />
            </div>
        </div>
    )
}

export default Dynamic