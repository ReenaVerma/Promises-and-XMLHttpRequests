document.addEventListener('DOMContentLoaded', function() {
  const unsplashService     = UnsplashAPIService();
  const domEvents           = DomEvents();
  const searchForm          = DomEvents().getFormElement();
  const moreButton          = DomEvents().getMoreButton();
  const errorPlaceholder    = document.getElementById('erroPlaceholder');

  searchForm.addEventListener('submit', function(event){
    event.preventDefault();
    const searchTerm = domEvents.getSearchTerm();
    domEvents.displaySearchTerm(searchTerm);

    unsplashService.getImages(searchTerm)
      .then((response) => {
        const res = JSON.parse(response.response);
        const imageURLs = res.results.map(images => images.urls.small);

        if (imageURLs.length > 0) {
          domEvents.displayImages(imageURLs);
        } else {
          errorPlaceholder.innerHTML = 'No results. Search again!';
        }
      })
      .catch((error) => {
        if (error) {
          domEvents.showNetworkError();
        }
      });
  });

  moreButton.onclick = function(event) {
    event.preventDefault();
    const searchTerm = domEvents.getSearchTerm();

    unsplashService.getNextPageOfImages(searchTerm)
      .then((response) => {
        const res = JSON.parse(response.response);
        const imageURLs = res.results.map(images => images.urls.small);
        domEvents.displayImages(imageURLs);
      });
  };
});
