import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import './components/navbar.css'
import { NavItem } from 'react-bootstrap';
import Footer from './components/Footer';
import ScrollToTop from './components/scrollToTop'



import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CareersPage from "./pages/CareersPage"
import ProjectsPage from "./pages/ProjectsPage"


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Propspro',

      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Projects', path: '/projects' },
        { title: 'Careers', path: '/careers' },
        { title: 'Contact', path: '/contact' }
      ],

      home: {
        title: 'Popspro Home Page',
        subTitle: 'Projects the make a difference',
        text: 'Checkout my projects below'
      },

      about: {
        title: 'About Us',
      },

      projects: {
        title: 'Check out our work',
      },

      careers:{
        title: 'Come Join Us',
      },

      contact: {
        title: 'Connect with us.',
      }
    }
  }








componentDidMount(){
  window.addEventListener('scroll', ()=>{
    const isTop = window.scrollY>137;
    const nav=document.getElementById('nav');
    console.log(window.scrollY)
    if(isTop){
      nav.classList.add('scrolled');
      
    }else{
     nav.classList.remove('scrolled');
    }
  });
}
componentWillUnmount(){
  window.removeEventListener('scroll');
}




//className="nav-link nav-item navbar" id="navText"



  render() {
    return (
      <Router>
      <ScrollToTop/>
        <Container className='p-0' fluid={true}>

        <Navbar  onToggle={this.setNavExpanded} expanded={this.state.navExpanded} fixed ="top" expand="lg" variant="dark" className='nav' id='nav'>
        <Navbar.Brand className="navText" id="navText"> Propspro </Navbar.Brand>
        <Navbar.Toggle  className="border-0 navbar-hamburger" aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav navText">
              <Nav className="ml-auto navbar">

                <NavItem className="nav-link navText nav-item navbar" id="navText"><Link to="/" >Home</Link></NavItem> 

                <NavItem className="nav-link navText nav-item navbar" id="navText"><Link to="/projects">Projects</Link></NavItem>
                <NavItem className="nav-link navText nav-item navbar" id="navText"><Link to="/careers">Careers</Link></NavItem>
                <NavItem className="nav-link navText nav-item navbar" id="navText"><Link to="/about" >About</Link></NavItem>
                <NavItem className="nav-link navText nav-item navbar" id="navText"><Link to="/contact">Contact</Link></NavItem>

                
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        

        
        <Route path="/" exact render={() => <HomePage title={this.state.home.title} />} />
        <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
        <Route path="/projects" render={() => <ProjectsPage title={this.state.projects.title} />} />
        <Route path="/careers" render={() => <CareersPage title={this.state.careers.title} />} />
        <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
        


        <Footer />
        </Container>

        


      </Router>
    );
  }
}

export default App;


