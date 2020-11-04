
import './navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react'
import { Container } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';


import './navbar.css'




class Navi extends React.Component {
  scrollToTop(){}

  state = {
    
    expanded: {}
  }
  setNavExpanded = (expanded) => {
    this.setState({ navExpanded: expanded });
    }
  
    closeNav = () => {
    this.setState({ navExpanded: false });
    }






componentDidMount(){
  window.addEventListener('scroll', ()=>{
    const isTop = window.scrollY<137;
    console.log(window.scrollY)
    if(isTop !== true){
      this.setState({scrolled:true})
    }else{
      this.setState({scrolled:false})
    }
  });
}
componentWillUnmount(){
  window.removeEventListener('scroll');
}
render(){
  return (
 
    <Container>

     <Navbar  onToggle={this.setNavExpanded} expanded={this.state.navExpanded} fixed ="top" expand="lg" variant="dark" className={(this.state.scrolled ? 'nav scrolled' : 'nav')} >
     <Navbar.Brand className="navText" id="navText"> Propspro </Navbar.Brand>
     <Navbar.Toggle className="border-0 navbar-hamburger" aria-controls="responsive-navbar-nav"/>
         <Navbar.Collapse id="responsive-navbar-nav navText">
           <Nav className="ml-auto navbar">
             <NavItem className="nav-link navText nav-item navbar" href="#home" id="navText" ><Link activeClass="active"  to="/" >Home</Link></NavItem>
             <NavItem className="nav-link navText nav-item navbar" id="navText"  ><Link activeClass="active" to="/projects">Projects</Link></NavItem>
             <NavItem className="nav-link navText nav-item navbar" id="navText"  ><Link activeClass="active" to="/careers">Careers</Link></NavItem>
             <NavItem className="nav-link navText nav-item navbar" id="navText" ><Link activeClass="active" to="/contact">Contact</Link></NavItem>
           </Nav>
         </Navbar.Collapse>
     </Navbar>
     </Container>

     );
}

}
    
 export default Navi; 