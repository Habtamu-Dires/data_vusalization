import { Navbar, NavbarBrand, NavItem, Nav, Collapse, NavbarToggler} from "reactstrap";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import About from "./AboutComponent";

function Header(props) {

    const[isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => setIsNavOpen(!isNavOpen);

    const resetItem = () =>{
        props.setItem('');
    }
    const setItemToAbout = () => {
        props.setItem('aboutPage');
    }
    
    return(
        <div className="mt-0 header">
            <Navbar dark expand="md">
                <NavbarBrand className="ms-5 my-3">
                    <h2 className="nav-brand">Ethiopia</h2>
                </NavbarBrand>
                <NavbarToggler onClick={toggleNav}/>
                <Collapse isOpen={isNavOpen} navbar>
                    <Nav navbar className="ms-auto">
                        <NavItem >
                            <NavLink style={{fontSize: 20}} className="me-2 nav-link" onClick={resetItem}>Query
                            </NavLink>
                        </NavItem>        
                        <NavItem>
                            <NavLink style={{fontSize: 20}} className="mx-3 me-4 nav-link" onClick={setItemToAbout}>
                                About</NavLink>
                        </NavItem>                                                
                       
                    </Nav>
                </Collapse>                
            </Navbar>
        </div>
    )
}

export default Header;