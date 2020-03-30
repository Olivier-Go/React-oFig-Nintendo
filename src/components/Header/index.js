// == Import npm
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// == Import
import './header.scss';

// == Composant
const Header = ({ nbGames, searchValue, setSearchValue }) => {
  const searchInput = useRef(null);

  useEffect(() => {
    searchInput.current.focus();
  }, []);

  return (
    <header>
      <div className="title">
        <i className="snes-jp-logo" /><h1>oFig - Nintendo</h1>
      </div>
      <p>{`${nbGames} Jeux`}</p>
      <input
        type="search"
        placeholder="Rechercher un jeu..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        ref={searchInput}
      />
    </header>
  );
};

Header.propTypes = {
  nbGames: PropTypes.number.isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

// == Export
export default Header;
