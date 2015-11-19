var Comment = React.createClass({

  render: function () {
    return (
      <li key={this.props.comment.id}>{this.props.comment.body}</li>
    );
  }

});
