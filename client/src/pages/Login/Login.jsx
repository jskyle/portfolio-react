import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Login.sass';
import {
  Form, Button, FormGroup, Label, Input,
} from 'reactstrap';
import {
  useHistory,
} from "react-router-dom";

// redux
import { loginUserThunk } from '../../store/auth/thunks' 

const Login = () => {
  const [ loginCredentials, setLoginCredentials ] = useState({username: '', password: ''});
  const dispatch = useDispatch();
  let history = useHistory();
  let login = () => {
       history.push("/create-post");
  };

  const submit = (e) => {
    e.preventDefault()
    dispatch(loginUserThunk(loginCredentials)).then(() => {
      login()
    });
    setLoginCredentials({username: '', password: ''});
  }

 


  return (
  <div className="login-page-container">
    <Form className="login-form">
      <FormGroup>
        <Label for="login-form-user-input" className="login-form-input-label">username</Label>
        <Input type="text" name="name" id="login-form-user-input" placeholder="example" value={loginCredentials.username} onChange={(e) => setLoginCredentials({ ...loginCredentials, username: e.target.value })}/>
      </FormGroup>
      <FormGroup>
        <Label for="login-form-password-input" className="login-form-input-label">password</Label>
        <Input type="password" name="name" id="login-form-password-input" placeholder="password" value={loginCredentials.password} onChange={(e) => setLoginCredentials({ ...loginCredentials, password: e.target.value })}/>
      </FormGroup>
      <FormGroup>
        <Button block color="dark" onClick={(e) => submit(e)}>Submit</Button>
      </FormGroup>
    </Form>
  </div>
)};

export default Login;
