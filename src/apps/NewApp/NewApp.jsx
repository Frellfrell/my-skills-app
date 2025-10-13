import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import File from './components/File';
import ProtectedRoute from './components/ProtectedRoute';
import { useEffect } from 'react';

const NewApp = () => {
  const namespace = 'newapp'; // Уникальный namespace для этого приложения
useEffect(() => {
  console.log("NewApp is rendering");
}, []);
  return (
    
      <Routes>
        <Route path="/login" element={<Login namespace={namespace} />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute namespace={namespace}>
              <File namespace={namespace} />
            </ProtectedRoute>
          }
        />
      </Routes>
    
  );
};

export default NewApp;
