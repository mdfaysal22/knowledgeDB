import React, { useEffect, useState } from 'react';
import BCard from './BCard/BCard';


const Aside = ({totalTime, bookedData}) => {
    const [bookmarkedItems, setBookmarkedItems] = useState([]);
    

    useEffect(() => {
        const getBookmarked = localStorage.getItem("bookmarked");
        if(getBookmarked){
            setBookmarkedItems(JSON.parse(getBookmarked));
        }
    }, [bookedData])

    
    return (
        <div className='sticky top-1 z-50'>
            <div className='border-2 p-5 bg-indigo-100 border-indigo-600 rounded-md'>
                <h1 className='text-2xl text-indigo-600	font-semibold'>Spent time on read : <span>{totalTime}</span> min</h1>
            </div>

            <div className='bg-gray-200 mt-8 p-5 rounded-md'>
                <h1 className='text-2xl mb-4 font-semibold'>Bookmarked Blogs : <span>{bookmarkedItems.length}</span></h1>
                {
                    bookmarkedItems.map((single, i) => <BCard key={i} single={single}></BCard>)
                }
                
            </div>
        </div>
    );
};

export default Aside;