import { connect } from 'react-redux';

import Cards from 'src/components/Cards';

const mapStateToProps = (state) => ({
  characters: state.filteredCharacters,
});

export default connect(
  mapStateToProps,
)(Cards);
