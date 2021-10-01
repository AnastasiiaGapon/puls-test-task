import React from 'react';
import { Container } from '@mui/material';

const Main: React.FC = ({ children }) => (
  <Container sx={{ paddingTop: 10 }}>
    {children}
  </Container>
);

export default Main;
