import React, { useState } from "react";
import { Container, Navbar as NavbarComp, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"

function Kabupaten() {
  return (
    <>
     <Navbar/>
      <Container className="mt-5">

      <Button className="btn-light btn-outline-dark me-3 f-2 fw-bold">
                Switch to Provinsi
              </Button>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          
          <div className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <Button className="btn-dark">Detail</Button>
            </div>
          </div>

   </div>
      </Container>
    </>
  );
}

export default Kabupaten;
