import React from 'react'

export default function Text({explanation, date, copyright}){
    return(
        <div>
            Text {explanation}, {date}, {copyright}
        </div>
    )
}