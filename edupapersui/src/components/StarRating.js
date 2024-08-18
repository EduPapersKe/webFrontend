import React from 'react';

export default function Rating({ rating, setRating, readOnly }) {
    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) => {
                return (
                    <span
                        key={star}
                        className='star'
                        style={{
                            cursor: readOnly ? 'default' : 'pointer',
                            color: rating >= star ? 'gold' : 'gray',
                            fontSize: '35px',
                        }}
                        onClick={() => {
                            if (!readOnly) {
                                setRating(star);
                            }
                        }}
                    >
                        ★
                    </span>
                );
            })}
            <div className='starcount'>
                Rated: {rating} / 5
            </div>
        </div>

    );
}
