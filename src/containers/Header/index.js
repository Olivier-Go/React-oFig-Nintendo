import { connect } from 'react-redux';
import { setSearchValue } from 'src/actions/oFigActions';

import Header from 'src/components/Header';

const mapStateToProps = (state) => ({
  nbGames: state.nbGames,
  searchValue: state.searchValue,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchValue: (newValue) => {
    dispatch(setSearchValue(newValue));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
