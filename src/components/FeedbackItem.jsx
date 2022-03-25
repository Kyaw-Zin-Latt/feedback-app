import { useState } from 'react'

function FeedbackItem({item,handleDelete},darkModes) {
    
    console.log(darkModes);

    return (
    
        <div className={`card mb-3 ${darkModes ? "bg-white" : "bg-white"} rounded-3`} >
            <div className='card-body position-relative'>
                <button onClick={() => handleDelete(item.id)} className='btn btn-sm btn-primary position-absolute' style={{right : '10px'}}>
                    <i className='fas fa-close'></i>
                </button>
                <p className='text-white d-flex mb-0 border rounded-circle bg-primary justify-content-center align-items-center position-absolute' style={{ width : '50px', height : '50px', top : '-10px', left : '-10px'}}>
                    {item.rating}
                </p>
                <p className='fw-bolder text-center my-2'>
                    {item.text}
                </p>
            
            </div>
        </div>
    )
}

export default FeedbackItem