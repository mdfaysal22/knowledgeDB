import React from 'react';
import {BsBookmark} from 'react-icons/bs';

const Card = ({singleData, handleBookmark, readTime}) => {
    const {name, image, profile, hash, published_in, read, title} = singleData;
    return (
        <div className='mb-5'>
            <div>
                <img className='w-full h-auto' src={image} alt="image" />
            </div>
            <div className='flex justify-between items-center py-4'>
                <div className='flex justify-start gap-5 items-center'>
                    <img src={profile} alt="" />
                    <div>
                        <h1 className='text-2xl font-semibold'>{name}</h1>
                        <small className='text-sm text-gray-500 font-normal'>{published_in}</small>
                    </div>
                </div>
                <div className='flex justify-end text-gray-500 items-center gap-2'>
                    <button className='text-lg'>{read} min read</button>
                    <button onClick={() => {handleBookmark(title)}}><BsBookmark></BsBookmark></button>
                </div>
            </div>

            <div className='mb-4'>
                <h1 className='text-4xl font-semibold'>{title}</h1>
                <small className='block py-5 text-lg font-semibold text-gray-400'>{hash}</small>
                <button onClick={() => readTime(read)} className='underline text-blue-600 hover:text-blue-700'>Mark as read</button>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default Card;