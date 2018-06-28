
var searchYouTube = (options, callback) => {


  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      maxResults: options.max,
      q: options.query,
      key: options.key,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true
    },
    success: function(data) {
      callback(data.items);
    },
    error: function(error) {
    }
  });
};

window.searchYouTube = searchYouTube;
