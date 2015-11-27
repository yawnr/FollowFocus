var Search = React.createClass({

    mixins: [ReactRouter.History],

    componentDidMount: function () {
      SearchResultsStore.addChangeHandler(this._onChange);
      var queryParams = this.props.location.query;
      SearchApiUtil.search(queryParams.query || "", queryParams.page || 1);
      var SearchInput = $('#search-input');
      var strLength= SearchInput.val().length * 2;
      SearchInput.focus();
      SearchInput[0].setSelectionRange(strLength, strLength);
    },

    componentWillUnmount: function () {
      $(document.getElementById("search-input")).text("");
      SearchResultsStore.removeChangeHandler(this._onChange);
    },

    componentWillReceiveProps: function (newProps) {
      SearchApiUtil.search(
        newProps.location.query.query,
        newProps.location.query.page
      );
    },

    _onChange: function () {
      this.setState({results: SearchResultsStore.results()});
    },

    _onInput: function (e) {
      e.preventDefault();
      var query = $(e.currentTarget).val();
      this.history.pushState(null, "/search", {
        query: query,
        page: 1
      });
    },

    render: function() {
      var results = SearchResultsStore.results().map(function (result) {
        if (result._type === "User") {
          return <UserSearchResult user={result} />;
        } else if (result._type === "Photo") {
          return <div className="photo-search-result"><img src={result.small} /></div>;
        } else {
          return <div className="album-search-result">{result.title}</div>;
        }
        });

      var nextPage = (parseInt(this.props.location.query.page) || 1) + 1;
      var query = this.props.location.query.query;
      return (
        <div className="search group">
          <input type="text"
            value={ query }
            onChange={ this._onInput }
            placeholder="Search for users, albums, or photos"
            id="search-input"
          />
          
          <ul className="search-results">
            { results }
          </ul>

          <p>
            Displaying { SearchResultsStore.results().length } of { SearchResultsStore.totalCount() }
          </p>

          <a className="next-page" href={ "#/search?query=" + query + "&page=" + nextPage }>
            Next
          </a>

        </div>
      );
    },

  });
