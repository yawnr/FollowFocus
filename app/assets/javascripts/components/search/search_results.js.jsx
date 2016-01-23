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
          return <UserSearchResult key={result.username} user={result} />;
        } else if (result._type === "Album") {
          return <AlbumSearchResult key={result.title} album={result} />;
        } else if (result._type === "Photo") {
          return <PhotoSearchResult key={result.id} photo={result} />;
        }
        });

      var nextPage = (parseInt(this.props.location.query.page) || 1) + 1;
      var prevPage = (parseInt(this.props.location.query.page) || 1) - 1;
      var query = this.props.location.query.query;

      var prevShow = " no-show";
      var nextShow = " no-show";

      if (results.length > 24 || prevPage > 0) {
        if (nextPage > 2) {
          prevShow = " show";
        }
        if (results.length < 24) {
          nextShow = " no-show";
        } else {
          nextShow = " show";
        }
      }

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

          <div className="prev-next">
            <a className={"next-page" + prevShow} href={ "#/search?query=" + query + "&page=" + prevPage }>
              Prev
            </a>
            <a className={"next-page" + nextShow} href={ "#/search?query=" + query + "&page=" + nextPage }>
              Next
            </a>
          </div>

        </div>
      );
    },

  });
