// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './cards.scss';

// == Composant
const Cards = ({ characters }) => {
  const handleClick = () => (
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  );

  return (
    <>
      <section className="game-cards">
        {characters.map((character) => (
          <div className=" card" key={character.id}>
            <img className="card__img" src={character.image} alt={character.name} />
            <p className="card__text">{character.name}</p>
          </div>
        ))}
      </section>
      <button type="button" className="scroll-btn" onClick={handleClick}>
        <span>&lt;</span>
      </button>
    </>
  );
};

Cards.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Cards;
