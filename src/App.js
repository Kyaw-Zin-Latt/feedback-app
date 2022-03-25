import { useState } from "react";
import DarkLightBtn from "./components/DarkLightBtn";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";


function App() {

    const [feedback, setFeedback] = useState(FeedbackData)
    const [darkMode, setDarkMode] = useState('true')

    const handleDarkMode = () => {
        setDarkMode(false)
    }

    const handleFeedback = (id) => {
        if (window.confirm("Are you sure to delete?")) {
            setFeedback(feedback.filter((item) => item.id != id ))
        }
    }

    return (

        <div className="container-fluid">
            <div className="row bg-dark">
                <div className="col-12">
                    <div className="container">
                        <div className="row my-3">
                            <div className="col-12 d-flex justify-content-between align-items-center">
                                <Header title="FeedBack UI" />
                                <button style={{ cursor: 'pointer' }} onClick={handleDarkMode}>
                                    <i className='fas fa-moon text-primary'></i>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center" style={{ backgroundColor: '#0e0e0e' }}>
                <div className="col-12 col-md-8">

                    <FeedbackList handleDelete={handleFeedback} feedbacks={feedback} darkMode={darkMode} />
                </div>
            </div>
        </div>

    );
}


export default App;