import React from 'react';


const BuildingsMetaData = ({ data }) => {
    const total = (data &&  data.length) || 0;

    return (
        <div>
            <h1>Buildings</h1>
            <div> 
                <span> Total  { total }</span>
            </div>
        </div>
    )
};

export default BuildingsMetaData;