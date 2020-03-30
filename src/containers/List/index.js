import { connect } from 'react-redux';
import { setSelectedGame } from 'src/actions/oFigActions';

import List from 'src/components/List';

const mapStateToProps = (state) => ({
  games: state.filteredGames,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedGame: (game) => {
    dispatch(setSelectedGame(game));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
