$(function () {
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;

  React.render((
    <Router>
      <Route path="/" component={Index}>
        <Route path="pokemon/:pokemonId" component={PokemonDetail} />
        <Route path="pokemon/:pokemonId/toys/:toyId" components={{pokeDetail: PokemonDetail, toyDetail: ToyDetail}} />
      </Route>
    </Router>
  ), document.getElementById("pokedex"));
});
