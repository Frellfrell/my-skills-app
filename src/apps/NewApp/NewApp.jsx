import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import File from './components/File';
import { CssBaseline, Container } from '@mui/material';


const NewApp = () => {
  console.log("NewApp component is rendering!"); 
  const namespace = 'newapp';

  return (
    <div style={{ border: '2px solid red' }}>
      <h2>New App</h2>
    <CssBaseline /> {/* Это для глобальных стилей Material UI */}
      <Container maxWidth="sm">
        <BrowserRouter>
          <Routes>
             <Route path="/login" element={<Login namespace={namespace} />} />

           <Route
              path="/file"
              element={
                <ProtectedRoute namespace={namespace}>
                  <File namespace={namespace} />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default NewApp;
