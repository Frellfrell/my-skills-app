import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveToken } from '../utils/auth'; // Утилита для работы с токенами
import { Button, TextField } from '@mui/material';

const Login = ({ namespace }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    
    const token = 'fake_token'; //  получения токена
    saveToken(namespace, token); // Сохраняем токен
    navigate('/file'); // Переходим на страницу профиля
  };

  return (
    <div>
      <h2>Login</h2>
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin} variant="contained">Login</Button>
    </div>
  );
};

export default Login;
