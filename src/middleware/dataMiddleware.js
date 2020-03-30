import { host } from 'src/data/data.json';
import axios from 'axios';
import {
  setLoading,
  GET_GAMES_DATA,
  saveGamesData,
  GET_CHARACTERS_DATA,
  saveCharactersData,

} from 'src/actions/oFigActions';

const dataMiddleware = (store) => (next) => (action) => {
  console.log(host);
  switch (action.type) {
    case GET_GAMES_DATA:
      axios.get(`${host}/games`)
        .then((response) => {
          store.dispatch(saveGamesData(response.data));
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.warn(error);
        });

      next(action);
      break;

    case GET_CHARACTERS_DATA:
      axios.get(`${host}/characters`)
        .then((response) => {
          store.dispatch(saveCharactersData(response.data));
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.warn(error);
        })
        .finally(() => {
          setTimeout(() => {
            store.dispatch(setLoading(false));
          }, 2000);
        });

      next(action);
      break;

    default:
      next(action);
  }
};

export default dataMiddleware;
