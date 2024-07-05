import { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0)
    const { name, job, image, text } = people[index]




    function checkNumber(number) {
        if (number > people.length - 1) {
            return 0;
        }
        else if (number < 0) {
            return people.length - 1;
        }
        return number;
    }
    function nextPerson() {
        setIndex((index) => {
            const newIndex = index + 1;
            return checkNumber(newIndex);
        })
    }
    function prevPerson() {
        setIndex((index) => {
            const newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }

    function randomNumber() {

        let randomNumber = Math.floor(Math.random() * people.length)
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    }

    return (
        <article className='review'>
            <div className="img-container">
                <img src={image} alt={name} className='person-img' />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className='prev-btn' onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={nextPerson}>
                    <FaChevronRight />
                </button>

            </div>
            <button className="random-btn" onClick={randomNumber}>
                surprise me
            </button>
        </article>
    );
};

export default Review;
