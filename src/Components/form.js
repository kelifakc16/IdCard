import React, { useState, useEffect } from 'react'
import { Button } from 'antd';
import { Stylesform } from './navbar.style';
import { FaSchool, } from 'react-icons/fa';
import { SiGoogleclassroom } from 'react-icons/si';
import { BsPersonFill } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import { RiNumbersLine } from 'react-icons/ri';

import { Row, Col } from 'antd';
import Idcard from './idcard';

export default function Form() {
    const [name, setName] = useState('');
    const [roll, setRoll] = useState('');
    const [school, setSchool] = useState('');
    const [address, setAddress] = useState('');
    const [grade, setGrade] = useState('');
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        const getdata = localStorage.getItem('data');
        console.log("getdata", getdata)
    }, [])

    const onSubmitFunction = () => {
        setSubmit(true);
        const data = {
            name, roll, school, address, grade
        }
        localStorage.setItem('data', JSON.stringify(data));

    }

    return (
        <Row>
            <Col span={6} offset={4}>
                <Stylesform>
                    <h1 className='title'>Students Details</h1>

                    <div className='form-inputs font-icon'>
                        <BsPersonFill />
                        <label className='form-label'> Enter Name:</label><br />
                        <input type='text' name='Name' className='input text-center' value={name} onChange={e => setName(e.target.value)} />

                    </div>
                    <div className='form-inputs font-icon'>
                        <RiNumbersLine />
                        <label className='form-label'> Roll No:</label><br />
                        <input type='text' name='Name' className='roll  text-center' value={roll} onChange={e => setRoll(e.target.value)} />

                    </div>
                    <div className='form-inputs font-icon'>
                        <FaSchool />
                        <label className='form-label'> Enter School Name:</label><br />
                        <input type='text' name='Name' className='schoolName text-center' value={school} onChange={e => setSchool(e.target.value)} />

                    </div>
                    <div className='form-inputs font-icon'>
                        <MdLocationPin />
                        <label className='form-label'> Address:</label><br />
                        <input type='text' name='Name' className='location text-center' value={address} onChange={e => setAddress(e.target.value)} />
                    </div>
                    <div className='form-inputs font-icon'>
                        <SiGoogleclassroom />
                        <label className='form-label'> Class:</label><br />
                        <input type='text' name='Name' className='class text-center' value={grade} onChange={e => setGrade(e.target.value)} />
                    </div>

                    <Button type="btn-generate" onClick={() => onSubmitFunction()}>Submit</Button>
                </Stylesform>

            </Col>
            <Col span={6} offset={4}>
                <h1>{submit}</h1>
                {submit ?
                    <Idcard name={name} address={address} grade={grade} roll={roll} /> : null}
            </Col>


        </Row>

    )
}
