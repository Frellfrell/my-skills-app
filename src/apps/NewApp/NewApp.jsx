import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import File from './components/File';
import ProtectedRoute from './components/ProtectedRoute';


const NewApp = () => {
  console.log("NewApp component is rendering!"); 
  const namespace = 'newapp'; // Уникальный namespace для этого приложения

  return (
    <div style={{ border: '2px solid red' }}>
      <h2>New App</h2>
   
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
   
    </div>
  );
};

export default NewApp;
