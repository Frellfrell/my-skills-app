import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import File from './components/File';
import { CssBaseline, Container } from '@mui/material';


const NewApp = () => {
  console.log("NewApp component is rendering!"); 
  

  return (
    <div style={{ border: '2px solid red' }}>
      <h2>New App</h2>
    <CssBaseline /> {/* Это для глобальных стилей Material UI */}
      <Container maxWidth="sm">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/file" element={<File />} />
            
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default NewApp;
