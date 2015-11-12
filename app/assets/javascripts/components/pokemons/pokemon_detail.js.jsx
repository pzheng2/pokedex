var PokemonDetail = window.PokemonDetail = React.createClass({
  getInitialState: function () {
    return { pokemon: this.getStateFromStore() };
  },

  getStateFromStore: function () {
    return PokemonStore.find(parseInt(this.props.params.pokemonId));
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchPokemon(newProps.params.pokemonId);
  },

  componentDidMount: function () {
    PokemonStore.addPokemonDetailChangeListener(this._onChange);
    ApiUtil.fetchPokemon(this.props.params.pokemonId);
  },

  _onChange: function () {
    this.setState({ pokemon: this.getStateFromStore() });
  },

  render: function () {
    if (!this.state.pokemon) {
      return <div></div>;
    }
    var toys;
    if (this.state.pokemon.toys) {
      toys = <ToysIndex toys={this.state.pokemon.toys}/>;
    }
    return (
      <div>
        <div className="detail">
          Attack: {this.state.pokemon.attack}
          Defense:{this.state.pokemon.defense}
          <img src={this.state.pokemon.image_url} />
          {toys}
        </div>
      </div>
    );
  }

});
