class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    }
    // this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleButtonClick(event) {
    event.preventDefault();
    console.log('clicked');
  }

  handleTitleClick(video) {
    this.setState({currentVideo: video});
    console.log(video);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div> <Search videos={this.state.videos} onClick={() => this.handleButtonClick(event)}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div> <VideoPlayer video={this.state.currentVideo} /></div>
          </div>
          <div className="col-md-5">
            <div> <VideoList videos= {this.state.videos} onClicky={this.handleTitleClick.bind(this)} /></div>
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
