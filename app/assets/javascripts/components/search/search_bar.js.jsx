var SearchBar = React.createClass ({

  mixins: [ReactRouter.History],

  search: function (e) {
    e.preventDefault();
    var query = $(e.currentTarget).val();
    this.history.pushState(null, "/search", {
      query: query,
      page: 1
    });
    $(e.currentTarget).val("");
  },

  render: function () {
    return(
      <div className="box">
        <div className="container-2">
            <span className="icon"><i className="fa fa-search"></i></span>
            <input onChange={this.search} type="search" id="search" placeholder="Search FollowFocus" />
        </div>
      </div>
    );
  }

});
