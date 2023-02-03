import { Navbar, NavbarBrand, NavItem, Nav, Collapse, NavbarToggler} from "reactstrap";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {Search} from 'react-bootstrap-icons';

function Header() {
    const[isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => setIsNavOpen(!isNavOpen);

    let options = ['volvo', 'Tesla', 'Nisan Deasel']

    const lists = options.map(op => {
        return(
            <div key={op} style={{backgroundColor: 'red'}} className='datalist-elm'>
                <option  value={op} >
                    {op}
                </option>
            </div>            
        )
    })
    
    const showSearch = () =>{
        document.querySelector('#navItem-search').classList.remove('d-none');
        document.querySelector('#navItem-query').classList.add('d-none')
    }

    const showGraph =(e) => {
        e.preventDefault()
        document.querySelector('#navItem-search').classList.add('d-none');
        document.querySelector('#navItem-query').classList.remove('d-none')
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
                        <NavItem id='navItem-search' className="d-none">
                            <form onSubmit={e=>showGraph(e)}>
                                <div className="row">
                                    <div className="search-field col-9 row">
                                        
                                        <input list="interest" className="col-10 text-input" type="text"
                                            autoFocus 
                                            />                                                              
                                    </div>
                                    <div className="col-3">
                                        <input className="ms-1 btn-show" type='submit' value='show'/>  
                                    </div>
                                </div>
                                
                                <datalist id='interest'>
                                        {lists}
                                </datalist>
                                
                            </form>
                        </NavItem>
                        <NavItem id='navItem-query'>
                            <NavLink className="me-3" onClick={showSearch}>Query</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="mx-3 me-4">Sources</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>                
            </Navbar>
        </div>
    )
}

export default Header;