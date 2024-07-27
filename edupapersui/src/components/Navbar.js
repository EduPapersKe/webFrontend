import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBBtn,
    MDBIcon,
    MDBNavbarNav,
    MDBInputGroup
} from 'mdb-react-ui-kit';

export default function App() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid className='d-flex justify-content-space-between'>
                    <MDBNavbarBrand href='#'>EDUPAPERS</MDBNavbarBrand>
                    <MDBNavbarLink className='nav-icon mx-2' href='#'>
                        <MDBIcon icon='user-alt' />
                    </MDBNavbarLink>
                    <MDBNavbarLink className='nav-icon mx-2' href='#'>
                        <MDBIcon fas icon='star' />
                    </MDBNavbarLink>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarTogglerDemo02'
                        aria-controls='navbarTogglerDemo02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={handleToggle}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse className='justify-content-end' navbar open={isNavOpen}>
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current='page' href='#'>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>PAPERS</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                                    API
                                </MDBNavbarLink>
                            </MDBNavbarItem>


                            <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
                                <input className='form-control' placeholder="search papers" aria-label="Search" type='Search' />
                                <MDBBtn> <MDBIcon icon='search' /></MDBBtn>
                            </MDBInputGroup>

                        </MDBNavbarNav>

                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
            <div className='header p-5 text-center bg-dark'>
                <h1 className='mb-3'>welcome to EDUPAPERS</h1>
                <h4 className='mb-3'>Your one stop shop for free notes and past papers</h4>
                <p>
                    Welcome to Edu Papers – your ultimate hub for acing school without the stress!
                    Whether you’re a curious primary schooler, a high school hero, or a college champ,
                    we’ve got you covered with free notes, test papers, and more. Dive in, explore,
                    and conquer your studies like a pro – because learning should be a breeze, not a burden!
                </p>
                <a className='btn btn-danger' href='' role='button'>
                    ulpoad your notes
                </a>
            </div>
        </>

    );
}
