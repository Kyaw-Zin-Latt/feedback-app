import {useState} from 'react'
import Button from '../shared/Button'
import RatingSelect from './RatingSelect';

function FeedbackForm({feedbacks,addFeedback}) {

    const [text, setText] = useState('');
    const [disableBtn, setDisableBtn] = useState(true);
    const [message, setMessage] = useState("hi");
    const [rating, setRating] = useState('');
    const handleTextType = (e) => {
        if (text === "") {
            setDisableBtn(true)
            setMessage(null)
        } else if(text !== "" && text.trim().length <= 10) {
            setDisableBtn(true)
        } else {
            setDisableBtn(false)
        }
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFeedback = {
            id : feedbacks.length+1,
            rating : Number(rating),
            text : text
        }
        addFeedback(newFeedback);
        setText(" ");
    }

    return (
        <div className='card'>
            <div className='card-body'>
                <form onSubmit={handleSubmit}>
                    <label>How would you rate your service with us?</label>
                    <RatingSelect select = {(rating) => setRating(rating)} />
                    <div className='row'>
                        <div className='col-9'>
                            <input onChange={handleTextType} className='form-control' type="text" name="" value={text} placeholder='Write a review' />
                        </div>
                        <div className='col-1'>
                            <Button type={'submit'} isDisabled={disableBtn} />
                        </div>
                    </div>
                </form>
                {message && <div className=''>{message}</div>}
            </div>
        </div>
    )
}

export default FeedbackForm