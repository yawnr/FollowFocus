var AlbumIndexItem = React.createClass({

  render: function () {

    var Link = ReactRouter.Link;

    return (
        <div>
          <Link to={"/albums/" + this.props.album.id} className="album-link">
            <span className="album-index-item-text">{this.props.album.title}</span>
          </Link>
          <li className="album-index-item"></li>
        </div>
    );
  }

});
