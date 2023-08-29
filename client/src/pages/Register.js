import React from 'react'
import { Button, Form, Input } from 'antd'
import { Link, Route, Routes } from "react-router-dom";

function Register() {
  return (
    <div className='authentication'>
     <div className='authentication-form card p-2'>
         <h1 className='card-title'>Register Here</h1>
         <Form layout='vertical'>

            <Form.Item label="Name" name='name'>

                 <Input placeholder='Name'/>
                 
            </Form.Item>
            <Form.Item label="Password" name='Pass'>

                 <Input placeholder='Password'/>
                 
            </Form.Item>

            <Form.Item label="email" name='email'>

                 <Input placeholder='email'/>
                 
            </Form.Item>

            <Button className='primary-button mt-13'>REGISTER</Button>
            <Link to ="/login" className='anchor'> Back to login </Link>


        </Form>
     </div>
        
    </div>
    
  )
}

export default Register