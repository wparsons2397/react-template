import React from 'react';
import "./GridRow.css";
import GridRowItem from '../gridRowItem/gridRowItem';

function GridRow({dataContent}) { 

    //for each item in dataContent, we iterate over it and assign to 1 gridRowItem
    //there are 6
    //lets assume they are populated but if a field is blank, we throw in a -
    
    
    // could do much better for longer term use - but basic implementation I prefer let
    // long term I would want to just be passing each as a prop
    let date,merchant, amount, category, description, status;

    //special case if data is undefined - edge cases always important
    if(dataContent === undefined)
    {
        date = "-";
        merchant = "-";
        amount = "-";
        category = "-";
        description = "-";
        status = "-";
    }
    else {
        date = dataContent.date ? dataContent.date : "-";
        merchant = dataContent.merchant ? dataContent.merchant : "-";
        amount = dataContent.amount ? dataContent.amount.toString() : "-";
        category = dataContent.category ? dataContent.category : "-";
        description = dataContent.description ? dataContent.description : "-";
        status = dataContent.status ? dataContent.status : "-";
    }

    return(
        <div className="GridRow">
            <GridRowItem toDisplay={date}></GridRowItem>
            <GridRowItem toDisplay={merchant}></GridRowItem>
            <GridRowItem toDisplay={amount}></GridRowItem>
            <GridRowItem toDisplay={category}></GridRowItem>
            <GridRowItem toDisplay={description}></GridRowItem>
            <GridRowItem toDisplay={status}></GridRowItem>
        </div>
    );
}

export default GridRow;