// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Loader from 'src/components/Loader';
import Header from 'src/containers/Header';
import List from 'src/containers/List';
import Cards from 'src/containers/Cards';
import './app.scss';

// == Composant
const App = ({ loading, loadGamesData, loadCharactersData }) => {
  useEffect(() => {
    loadGamesData();
    loadCharactersData();
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div className="nes-container">
          <Header />
          <main>
            <List />
            <Cards />
          </main>
        </div>
      )}
    </>
  );
};

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  loadGamesData: PropTypes.func.isRequired,
  loadCharactersData: PropTypes.func.isRequired,
};

// == Export
export default App;
