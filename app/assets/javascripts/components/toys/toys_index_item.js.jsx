var ToysIndexItem = window.ToysIndexItem = React.createClass({

  mixins: [ReactRouter.History],

  showDetail: function () {
    this.history.pushState(null, "pokemon/" + this.props.toy.pokemon_id + "/toys/" + this.props.toy.id, null);
  },

  render: function () {
    return (
        <li className="toy-list-item" onClick={this.showDetail}>
          <span>{this.props.toy.name}</span>
          <span>{this.props.toy.happiness}</span>
          <span>{this.props.toy.price}</span>
        </li>
    );
  }

});
