import React from 'react'

export default function Text({ explanation, date, copyright }) {
    return (
        <div className='text'>
            <p>{explanation}That's no sunspot. It's the International Space Station (ISS) caught passing in front of the Sun. Sunspots, individually, have a dark central umbra, a lighter surrounding penumbra, and no solar panels.  By contrast, the ISS is a complex and multi-spired mechanism, one of the largest and most sophisticated machines ever created by humanity.  Also, sunspots occur on the Sun, whereas the ISS orbits the Earth.  Transiting the Sun is not very unusual for the ISS, which orbits the Earth about every 90 minutes, but getting one's timing and equipment just right for a great image is rare.  Strangely, besides that fake spot, in this recent two-image composite, the Sun  lacked any real sunspots.  The featured picture combines two images -- one capturing the space station transiting the Sun -- and another taken consecutively capturing details of the Sun's surface.  Sunspots have been rare on the Sun since the dawn of the current Solar Minimum, a period of low solar activity. For reasons not yet fully understood, the number of sunspots occurring during both the previous and current solar minima have been unusually low."</p>
            <div className='textFooter'>
                <p>Date Posted: {date}</p>
                <p>Copyright: {copyright}</p>
            </div>
        </div>

    )
}