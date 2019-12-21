import React, { Component } from 'react';
import { login } from '../../utils/session';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';

class Login extends Component {

    handlerLogin = () => {
        login();
    }

    componentWillUnmount = () => {
        // alert(1);
    }

    render() {
        return (    
            <Container className="App">
            <h2>Sign In</h2>
            <Form className="form">
              <Col>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="mail@gmail.com"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="********"
                  />
                </FormGroup>
              </Col>
              <Button onClick={this.handlerLogin}>Submit</Button>              
            </Form>
          </Container>
        )
    }
}

export default Login;