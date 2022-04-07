import React from 'react'
import logo from '../../assets/images/BROWN-LOGO.png'
import { Form, Button, Alert } from 'react-bootstrap';

const Support = () => {
  return (
    <><div className='container animate__animated animate__fadeIn'>
      <img className='mt-5' src={logo} style={{ width: "85%" }} />
      <h1 className='mt-5 mb-5'>Support Our Work</h1>

      <p>Make the best choice in deciding where to invest your time and money with our Whats-Good mobileapp.
        It allows BIPOC clients to view and post reviews about their experiences through the lenses of Black people. Our
        app is to bring awareness to Black peoples' experiences, whether they be positive or negative.</p>
      
      <container className='container animate__animated animate__fadeIn'>
      <Form >
          
          <Form.Group>
            <Form.Label htmlFor='email'>Email</Form.Label>
           
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='password'>Password</Form.Label>
           
          </Form.Group>
          <Button
            
            type='submit'
            variant='success'>
            Submit
          </Button>
        </Form>
      </container>
        
      </div></>   
  )
}

export default Support;