import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeToken } from '../utils/auth'; // Утилита для работы с токенами
import { logout } from '../redux/actions'; // Экшн для очистки данных пользователя
import { Box, Typography,Button } from '@mui/material';

const File = ({ namespace }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    

    // Диспатчим экшн для очистки состояния пользователя в Redux
    dispatch(logout());

    // Удаляем токен для текущего приложения из localStorage
    removeToken(namespace);

    // Перенаправляем на страницу логина
    navigate('/login');
  };

  return (
    <Box textAlign="center">
      <Typography variant="h5" gutterBottom color="secondary">Profile Page</Typography>
      <Button
        onClick={handleLogout}
        variant="outlined"
        color="error"
        sx={{ mt: 2 }}
      >Login </Button>
    </Box>
  );
};

export default File;
