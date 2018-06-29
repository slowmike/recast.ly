class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0],
      throttled: false,
      inputValue: '',
      evtTarget: '',
      nextPage: ''
    };
    window.setInterval(() => this.setState({throttled: false}), 500);
  }
  componentWillMount() {
    var options = {query: this.state.inputValue, max: 5, key: window.YOUTUBE_API_KEY };
    this.props.searchYouTube( options, (data) => this.setState({
      videos: data.items,
      currentVideo: data.items[0],
      nextPage: data.nextPageToken
    }) );
  }
  // changeInput(value) {
  //   this.setState({inputValue: this.state.inputValue + value})
  // }
  handleChange(event) {
    var options = {query: input, max: 5, key: window.YOUTUBE_API_KEY};
    this.setState({inputValue: event.target.value});
    if (event.keyCode === 13) {
      this.handleSearchInput(event.target.value, options);
      event.target.value = '';
    } else if (event.type === 'click') {
      this.handleSearchInput(this.state.evtTarget.value, options);
      this.state.evtTarget.value = '';
    } else {
      if (!this.state.throttled) {
        this.handleSearchInput(event.target.value, options);
        this.setState({throttled: true});
        this.setState({evtTarget: event.target});
      }
    }
  }

  handleSearchInput(input, options) {
    this.props.searchYouTube( options, (data) => this.setState({
      videos: data.items,
      currentVideo: data.items[0],
      nextPage: data.nextPageToken
    }) );
  }

  handleNextPage() {
    var options = {query: this.state.inputValue, max: 5, key: window.YOUTUBE_API_KEY, pageToken: this.state.nextPage};
    this.handleSearchInput(this.state.inputValue, options);
  }

  handleTitleClick(video) {
    this.setState({currentVideo: video});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div> <Search videos={this.state.videos} catchChange={this.handleChange.bind(this)} onSearch={(event) => this.handleChange(event)} inputValue={this.state.inputValue}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div> <VideoPlayer video={this.state.currentVideo} /></div>
          </div>
          <div className="col-md-5">
            <div> <VideoList videos= {this.state.videos} onClick={this.handleTitleClick.bind(this)} nextPage={this.handleNextPage.bind(this)} /></div>
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
