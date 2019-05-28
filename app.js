document.addEventListener('DOMContentLoaded', function() {

  const unsplashService = unsplashServiceAPI();
  const dom             = domEvents();
  const form            = domEvents().formElement();
  const moreButton      = domEvents().moreButton();


  form.addEventListener('submit', function(e){
    e.preventDefault();

    const searchTerm = dom.returnSearchTerm();
    dom.displaySearchTerm(searchTerm);

    unsplashService.searchImages(searchTerm)
      .then((response) => {
        dom.displayImages(response);
      })
      .catch((error) => {
        if (error) {
          dom.networkError();
        }
      });
    // dom.removeError();
  });

  moreButton.onclick = function(e) {
    e.preventDefault();
    const searchTerm = dom.returnSearchTerm();
    unsplashService.moreImages(searchTerm)

      .then((response) => {
        dom.displayImages(response);
      });
  };
});
