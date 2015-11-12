var ApiUtil = window.ApiUtil = {
  fetch: function () {
    $.ajax({
      type: 'GET',
      url: 'api/pokemon',
      success: function (data) {
        ApiActions.receiveAllPokemons(data);
      }
    });
  },

  fetchPokemon: function (id) {
    $.ajax({
      type: 'GET',
      url: 'api/pokemon/' + id,
      success: function (data) {
        ApiActions.receiveSinglePokemon(data);
      }
    });
  },

  fetchToy: function (id) {
    $.ajax({
      type: 'GET',
      url: 'api/toys/' + id,
      success: function (data) {
        ApiActions.receiveToy(data);
      }
    });
  }


};
