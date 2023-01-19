import React from 'react';

const Tags = ({ tags}) => {
    return (
        <div className='tags'>
        { tags.map((tag, e) => (
        <div className='min-tag' key={e}>
         { tag }   
        </div>
))}   
        </div>
    );
};

export default Tags;