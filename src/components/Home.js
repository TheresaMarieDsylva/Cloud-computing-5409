import { Button } from "bootstrap";
import React from "react";
import { ButtonGroup } from "react-bootstrap";
import styled from "styled-components";
import Navigation from "./Navigation";
import { Nav, Navbar, Form, FormControl, Container } from 'react-bootstrap';
import '../stylesheets/home.css';

const GridWrapper = styled.div`
  display: inline;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;


const Home = (props) => (
    
  <GridWrapper>
    <Navigation />
    <br></br>
    <div>
    <button type="button" class="block" onClick={() =>{
        window.location = '/dashboard';}}
        >Dash Board</button>
    </div>
    
  </GridWrapper>
);

export default Home;
