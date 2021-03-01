import {useState} from 'react'
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {FaChevronDown as Down} from 'react-icons/fa'
import Typing from 'react-typing-animation';
import { useRef } from "react";
import Projects from './components/projects/index.js'
import About from './components/about/index.js'
import Contact from './components/contact/index.js'
import Hire from './components/hire/index.js'
import NotFound from './components/Error404/index.js'


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
      <Router basename={process.env.PUBLIC_URL} >
        <Navbar bg="dark" expand="md" variant="dark">
          <Navbar.Brand href="#home" className="Logo">Dylan Muraco</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              </Nav>
              <Nav inline>
                <Nav.Link>
                  <Link 
                    to="/home" 
                    className="link"
                    onClick={() => {
                      setActive("HOME")
                    }}
                    onMouseEnter={() => {ActiveHovered("HOME")}}
                    onMouseLeave={() => {deActiveHovered()}}
                    style={Active==="HOME" || Hovered==="HOME" ? {color:"white"}: {color: "rgba(255,255,255,.5)"}}
                  >
                    HOME
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/projects" 
                    className="link"
                    onClick={() => {
                      setActive("PROJECTS")
                    }}
                    onMouseEnter={() => {ActiveHovered("PROJECTS")}}
                    onMouseLeave={() => {deActiveHovered()}}
                    style={Active==="PROJECTS" || Hovered==="PROJECTS" ? {color:"white"}: {color: "rgba(255,255,255,.5)"}}
                  >
                    PROJECTS
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/about"
                    className="link"
                    onMouseEnter={() => {ActiveHovered("ABOUT")}}
                    onMouseLeave={() => {deActiveHovered()}}
                    style={Active==="ABOUT" || Hovered==="ABOUT" ? {color:"white"}: {color: "rgba(255,255,255,.5)"}}
                  >
                  ABOUT
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/contact"
                    className="link"
                    onMouseEnter={() => {ActiveHovered("CONTACT")}}
                    onMouseLeave={() => {deActiveHovered()}}
                    style={Active==="CONTACT" || Hovered==="CONTACT" ? {color:"white"}: {color: "rgba(255,255,255,.5)"}}
                  >
                    CONTACT
                  </Link>
                </Nav.Link>
                <Nav.Link 
                  
                >
                  <Link
                    to="/hire"
                    className="link HireMe"
                    onMouseEnter={() => {ActiveHovered("HIRE")}}
                    onMouseLeave={() => {deActiveHovered()}}
                    style={Active==="HIRE" || Hovered==="HIRE" ? {color:"white"}: {color: "rgba(255,255,255,.5)"}}
                  >HIRE DYLAN</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/hire">
            <Hire /> 
          </Route>

          <Route component={NotFound} /> 

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
        <span>I'm a </span>
        <Typing speed={200} startDelay={100}>
          <span style={{color: 'white'}} >Full Stack Developer</span>
        </Typing>

        <h4>designing & building exceptional projects</h4>

        <div className="go-to-portfolio">
          <div className="go-to-portfolio-flex" onClick={executeScroll}>

            <div className="go-to-one" > 
              view portfolio
            </div>

            <div className="go-to-two" >
              <Down/>
            </div>

          </div>
        </div>

      </div>
      <div ref={portfolio} className="portfolio">
        <h1>werin</h1>
      </div>
    </div>
  )
};