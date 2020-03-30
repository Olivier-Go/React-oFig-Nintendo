// action types
export const SET_LOADING = 'SET_LOADING';
export const SET_SELECTED_GAME = 'SET_SELECTED_GAME';
export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
export const GET_GAMES_DATA = 'GET_GAMES_DATA';
export const GET_CHARACTERS_DATA = 'GET_CHARACTERS_DATA';
export const SAVE_GAMES_DATA = 'SAVE_GAMES_DATA';
export const SAVE_CHARACTERS_DATA = 'SAVE_CHARACTERS_DATA';

// action creators
export const setLoading = (status) => ({
  type: SET_LOADING,
  status,
});

export const setSelectedGame = (game) => ({
  type: SET_SELECTED_GAME,
  game,
});

export const setSearchValue = (newSearchValue) => ({
  type: SET_SEARCH_VALUE,
  newSearchValue,
});

export const getGamesData = () => ({
  type: GET_GAMES_DATA,
});

export const saveGamesData = (games) => ({
  type: SAVE_GAMES_DATA,
  games,
});

export const getCharactersData = () => ({
  type: GET_CHARACTERS_DATA,
});

export const saveCharactersData = (characters) => ({
  type: SAVE_CHARACTERS_DATA,
  characters,
});
