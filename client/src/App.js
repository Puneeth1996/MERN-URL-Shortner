import React, { Component } from 'react'
// import logo from './logo.svg';
// import './App.css';

import { Navbar,Nav,NavDropdown,Form,Row,Col,Jumbotron,Container,Button } from 'react-bootstrap';
import axios from 'axios'
import validator from 'validator'


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { URL: '', shortURL: '', };
  }
  myChangeHandler = (event) => {
    this.setState({URL: event.target.value});
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    console.log("You are submitting " + this.state.URL);
    const validURL = validator.isURL(this.state.URL, {
      require_protocol: true
    })
    if(!validURL){
      this.setState({shortURL: "Invalid URL Make sure to ensure the url and http(s) protocols are correct."});
    }
    else{
      // send a POST request
      axios.post('http://localhost:5000/api/url/shorten', {
        "longUrl": this.state.URL
      })
        .then((response) => {
          console.log(response);
          this.setState({shortURL: response.data.shortUrl});
        }, (error) => {
          console.log(error);
        });
    }
  }


  render() {
    return (
      <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Insta - Car</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      
      
      <Jumbotron fluid>
        <Container>
        <Form onSubmit={this.mySubmitHandler}>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Enter URL
            </Form.Label>
            <Col sm={8}>
              <Form.Control type="url" placeholder="Please Enter The Url To Be Shortened" onChange={this.myChangeHandler} />
            </Col>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
        <p>{this.state.shortURL? <a href={this.state.shortURL}>{this.state.shortURL}</a>: ""}</p>
        </Container>
      </Jumbotron>
      
      </>
    )
  }
}
