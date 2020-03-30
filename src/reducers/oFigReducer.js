import {
  SET_LOADING,
  SET_SELECTED_GAME,
  SET_SEARCH_VALUE,
  SAVE_GAMES_DATA,
  SAVE_CHARACTERS_DATA,
} from 'src/actions/oFigActions';
import { getCharactersForGame, getGamesBySearch } from 'src/utils/selectors';

const initialState = {
  // games data
  games: [],
  // characters data
  characters: [],
  // number of games filtered by search
  nbGames: 0,
  // input search value
  searchValue: '',
  // games filtered list by search
  filteredGames: [],
  // characters filtered list by game
  filteredCharacters: [],
  // loader
  loading: true,
};

const oFigReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.status,
      };

    case SAVE_GAMES_DATA:
      return {
        ...state,
        games: action.games,
        filteredGames: action.games,
        nbGames: action.games.length,
      };

    case SAVE_CHARACTERS_DATA:
      return {
        ...state,
        characters: action.characters,
        filteredCharacters: action.characters,
      };

    case SET_SELECTED_GAME: {
      const gameCharacters = getCharactersForGame([...state.characters], action.game);
      return {
        ...state,
        filteredCharacters: gameCharacters,
      };
    }

    case SET_SEARCH_VALUE: {
      const newGamesList = getGamesBySearch([...state.games], action.newSearchValue);
      return {
        ...state,
        searchValue: action.newSearchValue,
        filteredGames: newGamesList,
        nbGames: newGamesList.length,
      };
    }

    default: return state;
  }
};

export default oFigReducer;
