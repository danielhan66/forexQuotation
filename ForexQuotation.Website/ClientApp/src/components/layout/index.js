import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import './Site.css';

export default props => (
  <div>
    <NavMenu />
    <Container>
      {props.children}
    </Container>
  </div>
);
