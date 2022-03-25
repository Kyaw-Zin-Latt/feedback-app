import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedbacks,handleDelete}, darkMode) {

    // const handleDelete = (id) => {
    //     console.log(id);
    // }
   
    if (!feedbacks || feedbacks.length === 0) {
        return <p className='text-white text-center my-3'>No Feedback Yet</p>
    }

    return (
        <div>
            {feedbacks.map((item) => (
                <FeedbackItem key={item.id} handleDelete={handleDelete} item={item} darkModes={darkMode} />
            ))}
        </div>
    )
}

export default FeedbackList