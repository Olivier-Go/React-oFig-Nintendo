import { connect } from 'react-redux';
import { getGamesData, getCharactersData } from 'src/actions/oFigActions';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  loadGamesData: () => {
    dispatch(getGamesData());
  },
  loadCharactersData: () => {
    dispatch(getCharactersData());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
