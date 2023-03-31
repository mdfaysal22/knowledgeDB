import React from 'react';
import BCard from './BCard/BCard';


const Aside = ({bookmarked}) => {

    const data = [
        "Master Microsoft Power Platform and Become an fff ", "Master Microsoft Power Platform and Become an fff ", "Master Microsoft Power Platform and Become an fff "
    ]
    return (
        <div>
            <div className='border-2 p-5 bg-indigo-100 border-indigo-600 rounded-md'>
                <h1 className='text-2xl text-indigo-600	font-semibold'>Spent time on read : 177 min</h1>
            </div>

            <div className='bg-gray-200 mt-8 p-5 rounded-md'>
                <h1 className='text-2xl mb-4 font-semibold'>Bookmarked Blogs : 8</h1>
                {
                    data.map((single, i) => <BCard key={i} single={single}></BCard>)
                }
                
            </div>
        </div>
    );
};

export default Aside;