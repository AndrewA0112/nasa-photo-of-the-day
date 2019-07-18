import React from 'react'

export default function Text({ explanation, date, copyright }) {
    return (
        <div className='text'>
            <p>{explanation}</p>
        </div>

    )
}