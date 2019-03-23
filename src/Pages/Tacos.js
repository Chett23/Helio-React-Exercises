import React from 'react';
import Tacos from '../imgs/Tacos.gif';
import Body from '../Components/Body';


export default () => (
    <Body>
        <hr />
        <div style={{ textAlign: 'center' }}>
            <h1 >Tacos for Edmundo!!!</h1>
            <img src={Tacos} alt='' />
        </div>
    </Body>
)