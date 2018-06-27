var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(video => 
      <VideoListEntry video={video} />
    )}
  </div>
);



// var GroceryList = (props) => (
//   <ul>
//   {props.items.map(item =>
//     <GroceryItems item={item} />
//   )}
// </ul>
// );

// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <GroceryList items={['item1','item2','item3', 'fourth item']} />
//   </div>
// );

var exampleData = window.exampleVideoData
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
