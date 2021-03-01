import {useState} from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {FaChevronDown as Down} from 'react-icons/fa'

import Typing from 'react-typing-animation';
import { useRef } from "react";

export default function App() {
  const [Active, setActive] = useState("HOME")
  const [Hovered, setHovered] = useState(null)

  function ActiveHovered(ElementName) {
    if(Active !== ElementName){
      setHovered(ElementName)
    }
  }
  const deActiveHovered = () => {
    setHovered(null)
  }
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" expand="md" variant="dark">
          <Navbar.Brand href="#home" className="Logo">Dylan Muraco</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              </Nav>
              <Nav inline>
                <Nav.Link
                  onMouseEnter={() => {ActiveHovered("HOME")}}
                  onMouseLeave={() => {deActiveHovered()}}
                  style={Active==="HOME" || Hovered==="HOME" ? {color:"white"}: {color: "rgba(255,255,255,.5)"}}
                >
                  HOME
                </Nav.Link>
                <Nav.Link
                  onMouseEnter={() => {ActiveHovered("PROJECTS")}}
                  onMouseLeave={() => {deActiveHovered()}}
                  style={Active==="PROJECTS" || Hovered==="PROJECTS" ? {color:"white"}: {color: "rgba(255,255,255,.5)"}}
                >PROJECTS</Nav.Link>
                <Nav.Link
                  onMouseEnter={() => {ActiveHovered("ABOUT")}}
                  onMouseLeave={() => {deActiveHovered()}}
                  style={Active==="ABOUT" || Hovered==="ABOUT" ? {color:"white"}: {color: "rgba(255,255,255,.5)"}}
                >ABOUT</Nav.Link>
                <Nav.Link
                  onMouseEnter={() => {ActiveHovered("CONTACT")}}
                  onMouseLeave={() => {deActiveHovered()}}
                  style={Active==="CONTACT" || Hovered==="CONTACT" ? {color:"white"}: {color: "rgba(255,255,255,.5)"}}
                >CONTACT</Nav.Link>
                <Nav.Link 
                  className="HireMe"
                  onMouseEnter={() => {ActiveHovered("HIRE")}}
                  onMouseLeave={() => {deActiveHovered()}}
                  style={Active==="HIRE" || Hovered==="HIRE" ? {color:"white"}: {color: "rgba(255,255,255,.5)"}}
                >HIRE DYLAN</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>
    </div>
  );
};

function Home() {
  const portfolio = useRef(null)

  const executeScroll = () => {
    portfolio.current.scrollIntoView()
  }

  return (
    <div className="Main">
      <div className="backgrounds">
        <div className="Background1"/>
      </div>
      <div className="focus">
        <Typing speed={200}>
          <span style={{color: 'white'}} >Full Stack Developer</span>
        </Typing>

        <h4>designing & building exceptional projects</h4>

        <div className="go-to-portfolio">
          <flex className="go-to-portfolio-flex" onClick={executeScroll}>

            <div className="go-to-one" > 
              view portfolio
            </div>

            <div className="go-to-two" >
              <Down/>
            </div>

          </flex>
        </div>

      </div>
      <div ref={portfolio} className="portfolio">
        <h1>werin</h1>
      </div>
    </div>
  )
};