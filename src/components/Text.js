import React from 'react'

export default function Text({ explanation, date, copyright }) {
    if(copyright === undefined)
    {
        return (
            <div className='text'>
                <p>{explanation}</p>
                <div className='textFooter'>
                    <p>Date Posted: {date}</p>
                    <p>Copyright: Public Domain</p>
                </div>
            </div>
    
        )
    }
    return (
        <div className='text'>
            <p>{explanation}</p>
            <div className='textFooter'>
                <p>Date Posted: {date}</p>
                <p>Copyright: {copyright}</p>
            </div>
        </div>

    )
}