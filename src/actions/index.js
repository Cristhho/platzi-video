// eslint-disable-next-line import/prefer-default-export
export const setFavorite = (payload) => ({
  type: 'SET_FAVORITE',
  payload,
});

// eslint-disable-next-line import/prefer-default-export
export const deleteFavorite = (payload) => ({
  type: 'DELETE_FAVORITE',
  payload,
});

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});