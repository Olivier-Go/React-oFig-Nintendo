/* eslint-disable import/prefer-default-export */
/** Get games by search
* @param {Array} games All games
* @param {String} searchValue to filter games by
* @return Array containing games filtered by search
*/
export const getGamesBySearch = (games, searchValue) => (
  games.filter((game) => game.toLowerCase().trim().includes(searchValue.toLowerCase().trim()))
);

/**
 * Get characters for a given game
 * @param {Array} characters All characters
 * @param {String} game to filter characters by
 * @return Array containing characters for a given game
 */
export const getCharactersForGame = (characters, game) => (
  characters.filter((character) => character.game === game)
);
