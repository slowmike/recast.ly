class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  handleSearchInput(e) {
    this.props.onInput(this.state.inputValue);
    if (e.keyCode === 13) {
      this.handleSearchClick();
    }
  }

  handleSearchClick() {
    this.props.onInput(this.state.inputValue);
    this.setState({inputValue: ''});
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" value={this.state.inputValue} onChange={evt => this.setState({inputValue: evt.target.value})}
          onKeyUp={event => this.handleSearchInput(event)}/>
        <button className="btn hidden-sm-down" onClick={() => this.handleSearchClick()}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
