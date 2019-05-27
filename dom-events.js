function domEvents() {

  // const unsplashService = unsplashServiceAPI();
  // const http = xhrRequestService();





  function formElement() {
    const form = document.getElementById('form');
    return form;
  }

  function returnSearchTerm() {
    const searchTerm = document.getElementById('search').value;
    return searchTerm;
  }

  function resultsContainer() {
    const results = document.getElementById('results');
    return results;
  }

  function moreButton() {
    const moreButton = document.getElementById('more');
    return moreButton;
  }

  function displayImages(response) {
    const res = JSON.parse(response.response);

    let result = '';
    res.results.forEach(elem => {
      console.log('foreach', elem);

      result +=
          `<div class="res">
            <h2> Title: ${elem.alt_description} </h2>
            <h3>likes: ${elem.likes}</h3>
            <img src="${elem.urls.small}" />
          </div>`;
      results.innerHTML = result;
    });

    return results;
  }

  // const results = document.getElementById('results');
  // let result = '';

  // function formSubmit(){
  //   return addEventListener('submit', function(e){
  //
  //     e.preventDefault();
  //     const searchTerm = document.getElementById('search').value;
  //     // console.log('Horray! Someone wrote "' + searchTerm + '"!');
  //     return unsplashService.searchImages(searchTerm);
  //
  //   });
  // }

  // function searchImages(searchTerm) {
  //   return http
  //
  //     .get(
  //       `${searchURL}page=1&per_page=${page}&orientation=squarish&query=${searchTerm}`,
  //     );
  // }





  return {
    formElement,
    returnSearchTerm,
    resultsContainer,
    moreButton,
    displayImages
  };

}
