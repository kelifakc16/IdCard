import React from 'react'
import { StyleCard } from './navbar.style'
import img1 from '../image/student.png';

export default function Idcard(props) {
    return (
        <StyleCard>
            <h1>Generated ID Card</h1>
            <div className='column'>
                <div className='left'>
                    <h3>{props.name}</h3>
                    <h4>class:{props.grade} </h4>
                    <h4>Roll No: {props.roll}</h4>
                    <h4>Address: {props.address}</h4>   </div>
                <div className='right'>
                    <img src={img1} alt='pic' height='100px' width='auto' />
                </div>
            </div>
        </StyleCard>
    )
}
