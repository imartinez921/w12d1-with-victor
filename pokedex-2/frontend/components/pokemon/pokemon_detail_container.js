import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';
import {requestOnePokemon} from './../../actions/pokemon_actions';


const mapStateToProps = (state, ownProps) => {
    return ({
        poke: state.entities.pokemon[ownProps.match.params.id]
    });
    
    // pokemon: selectAllPokemon(state)
  };


 const mapDispatchToProps = (dispatch, ownProps) => ({
      requestOnePokemon: () => dispatch(requestOnePokemon(ownProps.match.params.id))
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)