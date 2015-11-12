var ToyDetail = window.ToyDetail = React.createClass({
  getStateFromStore: function () {
    return PokemonStore.findToy(parseInt(this.props.params.pokemonId), parseInt(this.props.params.toyId));
  },

  getInitialState: function () {
    return { toy: this.getStateFromStore() };
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchToy(newProps.params.toyId);
  },

  componentDidMount: function () {
    PokemonStore.addToyDetailChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({ toy: this.getStateFromStore() });
  },

  render: function() {
    var toyDetails;
    if (this.state.toy) {
      toyDetails = <img src={this.state.toy.image_url} />;
    }

    return (
      <div className="detail">
        {toyDetails}
      </div>
    );
  }
});
