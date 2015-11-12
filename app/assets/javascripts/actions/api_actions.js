var ApiActions = window.ApiActions = {
  receiveAllPokemons: function (pokemons) {
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  },

  receiveSinglePokemon: function (pokemon) {
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMON_DETAIL_CHANGE_EVENT,
      pokemon: pokemon
    });
  },

  receiveToy: function (toy) {
    AppDispatcher.dispatch({
      actionType: PokemonConstants.TOY_RECEIVED,
      toy: toy
    });
  }

};
