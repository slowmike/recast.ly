var App = () => {

  var handleButtonClick = function(event) {
    event.preventDefault();
    console.log('clicked');
    //change a state in the app to clear the input
  }

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div> <Search videos={window.exampleVideoData} /></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div> <VideoPlayer videos={window.exampleVideoData} /></div>
        </div>
        <div className="col-md-5">
          <div> <VideoList videos={window.exampleVideoData} /></div>
        </div>
      </div>
    </div>
  );
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
