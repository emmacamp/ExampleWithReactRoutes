import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import { Button, Grid, Typography, Container, Box } from '@mui/material'
import GridContent from './components/Grid'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
/* import Card from '@mui/material/Card';1
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
 */

const Cmui = () => {
  return (

    <Container maxWidth="lg" sx={{ bgcolor: '#000', height: '100vh' }} >
      < GridContent />
      <h1>Hola</h1>
    </Container>
  )
};

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Next = () => <h1>Next</h1>;


const stylesInline = {
  padding: 'red'
}

function App() {


  return (
    <BrowserRouter>
      <header className="App">

        <Link to="/" style={stylesInline}>Home</Link>
        <Link to="/about" style={stylesInline}>About</Link>
        <Link to="/next" style={stylesInline}>Next</Link>

      </header >
      <Routes>
        {/* <Switch> */}
        <Route path="/about" element={<About />} />
        <Route path="/next" element={<Next />} />
        <Route path="/" element={<Cmui />} />
        {/* </Switch> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
