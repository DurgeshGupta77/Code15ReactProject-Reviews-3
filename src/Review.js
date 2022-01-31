import React, { useState } from "react";
import data from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0);
    // console.log(data);
    const { name, job, image, text } = data[index];

    const toggleLeft = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    }

    const toggleRight = () => {
        if (index < data.length - 1) {
            setIndex(index + 1);
        }
    }


    const randomQuoteGenerator = () => {
        const newIndex = Math.floor(Math.random() * data.length);
        if (index != newIndex) {
            setIndex(newIndex);
        }
    }



    return <React.Fragment>
        <article className="user-reviews">
            <div className="container">
                <div className="image-container">
                    <div className="quote-box">
                        <FaQuoteRight className="quote" />
                    </div>
                    <img src={image} alt={name} className="user-image" />
                </div>
                <h1 className="name-box">{name}</h1>
                <p className="job-box">{job}</p>
                <p className="text-box">{text}</p>
                <div className="toggle-btn-group">
                    <button className="toggle-left-btn" onClick={() => toggleLeft()}>
                        <FaChevronLeft />
                    </button>
                    <button className="toggle-right-btn" onClick={() => toggleRight()}>
                        <FaChevronRight />
                    </button>
                </div>
                <div className="random-btn-grp">
                    <button className="random-btn" onClick={() => randomQuoteGenerator()}>
                        Surprise Me
                    </button>
                </div>
            </div>

        </article>
    </React.Fragment>
}

export default Review;