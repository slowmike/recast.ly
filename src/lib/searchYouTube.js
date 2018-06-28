var searchYouTube = (options, callback) => {
  $.ajax({
    data: {
      maxResults: 5,
      q: options,
      key: window.YOUTUBE_API_KEY,

    }
  });
};

window.searchYouTube = searchYouTube;
