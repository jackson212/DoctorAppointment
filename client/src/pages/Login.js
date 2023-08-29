import { Button, Form, Input } from 'antd'
import React from 'react'

const Login = () => {
  return (
    <div className='authentication'>
     <div className='authentication-form card p-2'>
         <h1 className='card-title'>Login</h1>
         <Form layout='vertical'>
         
         <Form.Item label="email" name='email'>

            <Input placeholder='email'/>

          </Form.Item>
            
            <Form.Item label="Password" name='Pass'>

                 <Input placeholder='Password'/>
                 
            </Form.Item>

            

            <Button className='primary-button mt-13'>Login</Button>


        </Form>
     </div>
        
    </div>
  )
}

export default Login

