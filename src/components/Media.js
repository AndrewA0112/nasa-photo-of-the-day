import React from 'react'

export default function Media({mediaUrl, mediaType}){

    if(mediaType === 'video'){
        return(
            <div>
                Media {mediaUrl}, {mediaType}
                <iframe width ="50%" height="500px" src={mediaUrl}/>
            </div>
        )
    }
    else  if(mediaType === 'image'){
        return(
            <div>
                Media {mediaUrl}, {mediaType}
                <img src={mediaUrl} />
            </div>
        )
    }
    else {
        return(
            <div>
                No media type found
            </div>
        )
    }
}