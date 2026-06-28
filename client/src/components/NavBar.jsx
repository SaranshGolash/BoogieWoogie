import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from './Button';

function NavBar({businessName, navStyle, links}) {

  const [hoveredIndex, setHoveredIndex] = useState(null);


  const isActive = (href) => {
    return window.location.pathname === href;
  };

  const navBar = {
    backgroundColor: 'hsl(42 60% 98%)',
    color: 'black',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 'bold'
  }

  function onMouseEnter(e) {
    e.target.style.color = 'black';
  }

  function onMouseLeave(e) {
    e.target.style.color = 'white';
  }

  const btnStyle = {
    backgroundColor: 'hsl(24 85% 45%)',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '25px',
    padding: '15px 40px',
    fontSize: '16px',
    fontWeight: 'bold'
  }

  const navContentStyle = {
    maxHeight: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexFlow: 'row wrap',
    gap: '20px'
  }
  return (
    <Navbar expand="lg" style={navBar}>
      <Container fluid>
        <Navbar.Brand href="#" style={{color:'hsl(24 60% 15%)',  fontSize:'24px'}}>{businessName || businessName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={navContentStyle}
            navbarScroll
          >
            {links.map((link, index) => (
                <Nav.Link
                    key={index}
                    href={link.href}
                    active={isActive(link.href)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{color: hoveredIndex === index ? 'hsl(24 85% 45%)' : 'hsl(24 30% 45%)'}}
                >
                    {link.text}
                </Nav.Link>
            ))}
            <Button textBtn={"Get Involved"} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} btnStyle={btnStyle}/>
            {/*<Nav.Link>
              <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={{color: '#7BC0E3'}}>Login
              </span><span style={{color: '#7BC0E3'}}>/</span>
              <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={{color: '#7BC0E3'}}>SignUp</span></Nav.Link>*/}
            {/*<NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>*/}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;