var Search = () => {
  
  var handleClick = function(event) {
    event.preventDefault();
    console.log('clicked');
    //change a state in the app to clear the input
  }

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" />
      <button className="btn hidden-sm-down"  >
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  );
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
