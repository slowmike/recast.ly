class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0],
      throttled: false
    };
    window.setInterval(() => this.setState({throttled: false}), 1000);
  }
  componentWillMount() {
    var options = {query: 'react js', max: 5, key: window.YOUTUBE_API_KEY};
    this.props.searchYouTube( options, (data) => this.setState({
      videos: data,
      currentVideo: data[0]
    }) );
  }

  handleSearchInput(input) {
    if(!this.state.throttled) {
      console.log(this.state.throttled);
      var options = {query: input, max: 5, key: window.YOUTUBE_API_KEY};
      this.props.searchYouTube( options, (data) => this.setState({
        videos: data,
        currentVideo: data[0]
      }) );
      this.setState({throttled: true});
    }
  }

  handleTitleClick(video) {
    this.setState({currentVideo: video});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div> <Search videos={this.state.videos} onInput={this.handleSearchInput.bind(this)} /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div> <VideoPlayer video={this.state.currentVideo} /></div>
          </div>
          <div className="col-md-5">
            <div> <VideoList videos= {this.state.videos} onClick={this.handleTitleClick.bind(this)} /></div>
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
