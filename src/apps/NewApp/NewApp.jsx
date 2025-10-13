import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './components/Login';
import File from './components/File';
import { CssBaseline, Container } from '@mui/material';
import  store  from './redux/store';


const NewApp = () => {
  console.log("NewApp component is rendering!"); 
  const namespace = 'newapp';

  return (
     <Provider store={store}>
    
      <h2>New App</h2>
    <CssBaseline /> {/* Это для  стилей Material UI */}
      <Container maxWidth="sm"  sx={{
          mt: 6, // отступ сверху, чтобы отделить от выпадающего списка
          mb: 6,
        }}
      >
        <Paper
          elevation={4}
          sx={{
            p: 4,
            borderRadius: 3,
            background: 'linear-gradient(135deg, #e3f2fd, #fce4ec)',
          }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: 'bold', color: '#1565c0' }}
          >
            🌟 New App
          </Typography>

         <BrowserRouter basename="/my-skills-app">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login namespace={namespace} />} />
            <Route path="/file" element={<File namespace={namespace} />} />
          </Routes>
        </BrowserRouter>
         </Paper>
      </Container>
    
    </Provider>
  );
};

export default NewApp;
