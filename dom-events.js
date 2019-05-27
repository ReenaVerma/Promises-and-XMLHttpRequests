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
    returnSearchTerm

  };

}
