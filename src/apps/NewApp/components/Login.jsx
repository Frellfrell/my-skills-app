import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveToken } from '../utils/auth'; // Утилита для работы с токенами

const Login = ({ namespace }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    
    const token = 'fake_token'; //  получения токена
    saveToken(namespace, token); // Сохраняем токен
    navigate('/profile'); // Переходим на страницу профиля
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
