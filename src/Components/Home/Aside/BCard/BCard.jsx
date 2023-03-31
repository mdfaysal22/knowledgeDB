import React from 'react';

const BCard = ({single}) => {
    return (
        <div className='my-4 p-4 rounded-md bg-white'>
            <h1 className='text-lg font-semibold'>{single}</h1>
        </div>
    );
};

export default BCard;