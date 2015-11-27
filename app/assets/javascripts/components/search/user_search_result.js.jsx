var UserSearchResult = React.createClass({

  render: function () {
    return (
      <div>
        <div><img src={this.props.user.user_photo} /></div>
        <div>{this.props.user.username}</div>
      </div>
    );
  }

});
