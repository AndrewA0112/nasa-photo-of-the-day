import React from 'react'

import { DateInput } from 'semantic-ui-calendar-react';
import { Form } from 'semantic-ui-react'


export default function DateInputForm({apiDate, setApiDate}){

    const maxDate = new Date();

    function handleDateChange(event, {value}) {
        setApiDate(value)
    }

    return(
            <div className='datePicker'>
                <Form>
                    <DateInput
                        name="date"
                        placeholder="Date"
                        value={apiDate}
                        dateFormat="YYYY-MM-DD"
                        iconPosition="left"
                        closable = {true}
                        onChange={handleDateChange}
                        maxDate = {maxDate}
                    />
                </Form>
            </div>
    )
    
}