import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import components
import Nav from './components/Nav';
import Login from './pages/Login';
import Landing from './pages/Landing';
import CardSection from './pages/CardSection';

function App() {
  return (
    <ChakraProvider>
      <Nav />
      {/* <Landing/> */}
      <CardSection/>
    </ChakraProvider>
  );
}

export default App;
