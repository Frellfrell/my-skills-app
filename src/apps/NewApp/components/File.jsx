import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeToken } from '../utils/auth'; // Утилита для работы с токенами
import { logout } from '../redux/actions'; // Экшн для очистки данных пользователя

const Profile = ({ namespace }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Удаляем токен для текущего приложения из localStorage
    removeToken(namespace);

    // Диспатчим экшн для очистки состояния пользователя в Redux
    dispatch(logout());

    // Перенаправляем на страницу логина
    navigate('/login');
  };

  return (
    <div>
      <h2>Profile Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
