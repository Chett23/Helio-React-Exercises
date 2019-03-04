import React from 'react';
import Tacos from '../imgs/Tacos.gif';


export default () => (
    <React.Fragment>
        <hr />
        <div style={{ textAlign: 'center' }}>
            <h1 >Tacos for Edmundo!!!</h1>
            <img src={Tacos}  />
        </div>
    </React.Fragment>
)