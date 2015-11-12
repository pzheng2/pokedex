var PokemonIndexItem = window.PokemonIndexItem = React.createClass ({

  mixins: [ReactRouter.History],

  showDetail: function () {
    this.history.pushState(null, "pokemon/" + this.props.pokemon.id, null);
  },

  render : function () {
    return (
      <li className="poke-list-item" onClick={this.showDetail}>
        <span>{this.props.pokemon.name}</span><br />
        <span>{this.props.pokemon.poke_type}</span>
      </li>

    );
  }

});
