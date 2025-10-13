import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './components/Login';
import File from './components/File';
import { CssBaseline, Container } from '@mui/material';
import { store } from './redux/store';


const NewApp = () => {
  console.log("NewApp component is rendering!"); 
  const namespace = 'newapp';

  return (
     <Provider store={store}>
    <div style={{ border: '2px solid red' }}>
      <h2>New App</h2>
    <CssBaseline /> {/* Это для глобальных стилей Material UI */}
      <Container maxWidth="sm">
         <BrowserRouter basename="/my-skills-app">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login namespace={namespace} />} />
            <Route path="/file" element={<File namespace={namespace} />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
    </Provider>
  );
};

export default NewApp;
