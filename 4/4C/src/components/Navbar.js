import React, { useState } from "react";
import { Container, Navbar as NavbarComp, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";



function Navbar() {

   
  return (

      <NavbarComp>
        <Container>
          <NavbarComp.Brand>
            <h1 className="mt-3">Provinsi & Kabupaten</h1>
          </NavbarComp.Brand>
          <NavbarComp.Toggle aria-controls="basic-navbar-nav" />
          <NavbarComp.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              
              <Button
              
              className="btn-light btn-outline-dark me-3 f-2 fw-bold">
               Add Provinsi
              </Button>
              <Button
           
              className="btn btn-dark text-light f-2 fw-bold">
                Add Kabupaten
              </Button>
            </Nav>
          </NavbarComp.Collapse>
        </Container>
      </NavbarComp>

    

  );
}

export default Navbar;
