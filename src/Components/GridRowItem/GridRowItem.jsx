import React from "react";
import "./GridRowItem.css";

function GridRowItem({toDisplay}) { 
    //simple component just to display
    return(
        <div className="GridRowItem"> {toDisplay} </div>
    );
}

export default GridRowItem;