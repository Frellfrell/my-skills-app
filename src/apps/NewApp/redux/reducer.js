import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние
const initialState = {
  user: null,
  token: null,
};

// Создание слайса для авторизации
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => {
      return initialState; // сбрасываем состояние при логауте
    },
  },
});

// Экспортируем действия
export const { logout } = authSlice.actions;

// Экспортируем редьюсер
export default authSlice.reducer;