import React from 'react'

export default function Media({mediaUrl, mediaType}){

    if(mediaType === 'video'){
        return(
            <div className='media'>
                {/* Media {mediaUrl}, {mediaType} */}
                <iframe width ="50%" height="500px" src={mediaUrl}/>
            </div>
        )
    }
    else  if(mediaType === 'image'){
        return(
            <div className='media'>
                {/* Media {mediaUrl}, {mediaType} */}
                <img src={mediaUrl} />
            </div>
        )
    }
    else {
        return(
            <div className='media'>
                No media type found
                {/* <iframe src='https://www.youtube.com/embed/xc1SzgGhMKc?start=850'/> */}
            </div>
        )
    }
}