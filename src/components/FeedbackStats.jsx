import React from 'react'

function FeedbackStats({ feedback }) {
    let average = feedback.reduce((acc,cur) => {
        console.log(cur);
        return acc + cur.rating;
    },0)/feedback.length
    average = average.toFixed(1);
    return (
        <div className='my-3 d-flex justify-content-between align-items-center'>
            <h6 className='text-white'>
                {feedback.length} 
                <span className='ms-1'> Reviews </span>
            </h6>
            <h6 className='text-white'>
                Average : {isNaN(average) ? 0 : average }
            </h6>
        </div>
    )
}

export default FeedbackStats