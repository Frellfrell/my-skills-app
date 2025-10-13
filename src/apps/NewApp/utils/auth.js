const TOKEN_KEY_PREFIX = 'app_token_';

export const tokenKey = (namespace) => `${TOKEN_KEY_PREFIX}${namespace}`;

export const saveToken = (namespace, token) => {
  localStorage.setItem(tokenKey(namespace), token);
};

export const getToken = (namespace) => {
  return localStorage.getItem(tokenKey(namespace));
};

export const removeToken = (namespace) => {
  localStorage.removeItem(tokenKey(namespace));
};
