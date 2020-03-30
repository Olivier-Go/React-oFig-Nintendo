// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './list.scss';

// == Composant
const List = ({ games, setSelectedGame }) => (
  <section className="game-list">
    <ul>
      {games.map((game) => (
        <li key={game} onClick={() => setSelectedGame(game)}>{game}</li>
      ))}
    </ul>
  </section>
);

List.propTypes = {
  games: PropTypes.array.isRequired,
  setSelectedGame: PropTypes.func.isRequired,
};

// == Export
export default List;
