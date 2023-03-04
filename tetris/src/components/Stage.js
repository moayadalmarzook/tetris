import React from 'react';
// eslint-disable-next-line
import Cell from './Cell';

const Stage =({Stage})=>(
    <dev>
        
        {Stage.map(row=>row.map((Cell,x)=><Cell key={x} type={Cell[0]}/>))}
    </dev>
)
export default Stage;