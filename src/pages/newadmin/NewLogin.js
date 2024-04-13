import React, {useState} from 'react'
import {Container, Row, Col, Form, FormGroup, Button} from 'reactstrap'
import './NewLogin.css'
import {Link} from 'react-router-dom'
import loginImg from './loginImg.jpg'
import userIcon from './user1.png'


const Login = () => {

  const [credentials, setCredentials] = useState({
    email:undefined,
    password:undefined
 })

  const handleChange = e => {
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
  };

  const handleClick = e=>{
    e.preventDefault()
  }


  return (<><div class="NewLoginPage">
      <Row>
        <Col className='m-auto'>
          <div className="login__container d-flex justify-content-between">
            <div className="login__img">
              <img src={loginImg} alt='' />
            </div>

            <div className="login__form">
              <div className="user">
                <img src={userIcon} alt='' />
              </div>
              <h2>Login</h2>
              <Form onSubmit={handleClick}>
                <FormGroup>
                  <input type='email' placeholder='Email' required id='email' onChange={handleChange}/>
                </FormGroup>

                <FormGroup>
                  <input type='password' placeholder='Password' required id='password' onChange={handleChange}/>
                </FormGroup>

                <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
  </div></>);
}

export default Login