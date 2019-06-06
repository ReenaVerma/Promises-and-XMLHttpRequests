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

/*
    please remove empty lines, and be consistent
    please use full name everywhere for easier understanding
    please remove the console.logs in the final implementation
*/

/*
    NAMING CONVENTIONS
    factory functions, classes               --> uppercase  (UnsplashService)
    instances of factory function or classes --> lowercase  (unsplashService)
    functions                                --> lower case always use verbs, or commands
    variables                                --> subject
    boolean variable                         --> can be a yes/no question (isVisible)
*/

// OOP SOLID principles
