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
    <Box textAlign="center">
      <Typography variant="h5" gutterBottom color="primary">Login  </Typography>
       <Stack spacing={2} alignItems="center">
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
         fullWidth
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
         fullWidth
      />
      <Button onClick={handleLogin} variant="contained" color="primary"
          sx={{ mt: 2, width: '100%' }}>Login</Button>
    </Stack>
     </Box>
  );
};

export default Login;
