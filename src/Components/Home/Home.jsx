import React, { useState } from 'react';
import Aside from './Aside/Aside';
import Cards from './Cards/Cards';

const Home = () => {
    const [bookmarked, setBookmarked] = useState([]);
    return (
        <div className='grid gap-4 mt-4 grid-cols-3'>
            <div className='col-span-2'>
                <Cards bookmarked = {bookmarked}></Cards>
            </div>
            <div className='col-span-1'>
                <Aside bookmarked = {bookmarked}></Aside>
            </div>
        </div>
    );
};

export default Home;