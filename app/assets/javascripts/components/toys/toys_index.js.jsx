var ToysIndex = window.ToysIndex = React.createClass ({

  render: function () {
    var toys = this.props.toys.map(function (toy) {
      return <ToysIndexItem toy={toy} key={toy.id} />;
    });

    return (
        <ul>
          {toys}
        </ul>
    );
  }

});
