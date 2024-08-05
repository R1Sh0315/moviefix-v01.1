import React from 'react';
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

const Rating = ({ val }) => {
    const fullStars = Math.floor(val / 2);
    const halfStars = (val % 2) >= 1 ? 1 : 0;
    const outlineStars = 5 - fullStars - halfStars;

    return (
        <div className='star-container'>
            {/* Render full stars */}
            {[...Array(fullStars)].map((_, index) => (
                <IoIosStar key={`full-${index}`} />
            ))}

            {/* Render half star if needed */}
            {halfStars === 1 && <IoIosStarHalf />}

            {/* Render outline stars */}
            {[...Array(outlineStars)].map((_, index) => (
                <IoIosStarOutline key={`outline-${index}`} />
            ))}
        </div>
    );
};

export default Rating;
