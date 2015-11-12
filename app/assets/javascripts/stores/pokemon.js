var _pokemons = [];

var PokemonStore = window.PokemonStore = $.extend({}, EventEmitter.prototype, {
  all: function () {
    return _pokemons.slice();
  },

  find: function (id) {
    return _pokemons.filter(function (pokemon) {
      return pokemon.id === id;
    })[0];
  },

  findToy: function (pokemonId, toyId) {
    return find(pokemonId).toys.filter(function (toy) {
      return toy.id === toyId;
    })[0];
  },

  indexOf: function (pokeId) {
    for (var i = 0; i < _pokemons.length; i++) {
      if (_pokemons[i].id === pokeId) {
        return i;
      }
    }
  },

  addToyDetailChangeListener: function (callback) {
    this.on(PokemonConstants.TOY_RECEIVED, callback);
  },

  addPokemonsIndexChangeListener: function (callback) {
    this.on(PokemonConstants.POKEMONS_INDEX_CHANGE_EVENT, callback);
  },

  addPokemonDetailChangeListener: function (callback) {
    this.on(PokemonConstants.POKEMON_DETAIL_CHANGE_EVENT, callback);
  },

  removeToyDetailChangeListener: function (callback) {
    this.removeListener(PokemonConstants.TOY_RECEIVED, callback);
  },

  removePokemonDetailChangeListener: function(callback) {
    this.removeListener(PokemonConstants.POKEMON_DETAIL_CHANGE_EVENT, callback);
  },

  removePokemonsIndexChangeListener: function (callback) {
    this.removeListener(PokemonConstants.POKEMONS_INDEX_CHANGE_EVENT, callback);
  },

  dispatcherID: AppDispatcher.register(function (payload) {
    switch(payload.actionType) {
      case PokemonConstants.POKEMONS_RECEIVED:
        resetPokemons(payload.pokemons);
        PokemonStore.emit(PokemonConstants.POKEMONS_INDEX_CHANGE_EVENT);
        break;
      case PokemonConstants.POKEMON_DETAIL_CHANGE_EVENT:
        resetSinglePokemon(payload.pokemon);
        PokemonStore.emit(PokemonConstants.POKEMON_DETAIL_CHANGE_EVENT);
        break;
      case PokemonConstants.TOY_RECEIVED:
        resetToy(payload.toy);
        PokemonStore.emit(PokemonConstants.TOY_RECEIVED);
        break;
    }
  }),

});

var resetToy = function (toy) {
  var toys = _pokemons[PokemonStore.indexOf(toy.pokemon_id)].toys;
};

var resetSinglePokemon = function (pokemon) {
  _pokemons[PokemonStore.indexOf(pokemon.id)] = pokemon;
};


var resetPokemons = function (pokemons) {
  _pokemons = pokemons;
};
