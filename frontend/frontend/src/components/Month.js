import React from 'react'
export var Month=()=>
{
    const months    = ['January','February','March','April',' May','June','July','August','September','October','November','December'];
    const now       = new Date();
    const thisMonth = months[now.getMonth()]; // getMonth method returns the month of the date (0-January :: 11-December)
    //const output = document.getElementById('output');
    //console.log(thisMonth);

    return(
        <div className="">
            <h2 id="output" className="mx-3">  {thisMonth}</h2>
        </div>
    );
}

export default Month;