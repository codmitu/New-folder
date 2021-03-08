import { Container, Typography } from '@material-ui/core';
import React from 'react';
import Order from './components/Order/index.js';

function App() {
  return (
    <Container maxWidth="md">
      <Typography gutterBottom variant="h2" align="center">
        Restaurant App
      </Typography>
      <Order />
    </Container>
  );
}

export default App;
