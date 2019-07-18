import React from 'react'
import { Header } from 'semantic-ui-react'
import DateInput from '../components/DateInput'

export default function Title({title, date, copyright, apiDate, setApiDate}){
    if(copyright === undefined) {
        return(
            <div>
                <Header className='headerContent' as='h2'>
                    {title}
                    <Header.Subheader className='headerContent'>
                        <p>Date Posted: {date} </p>
                        <p>Copyright: Public Domain</p>
                        <DateInput
                            apiDate={apiDate}
                            setApiDate={setApiDate}
                        />
                    </Header.Subheader>
                </Header>
            </div>
        )

    }
    else {
        return(
            <div>
                <Header className='headerContent' as='h2'>
                    {title}
                    <Header.Subheader className='headerContent'>
                        <p>Date Posted: {date} </p>
                        <p>Copyright: {copyright}</p>
                        <DateInput
                            apiDate={apiDate}
                            setApiDate={setApiDate}
                        />
                    </Header.Subheader>
                </Header>
            </div>
        )
    }
    
}