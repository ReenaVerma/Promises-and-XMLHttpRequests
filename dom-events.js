function domEvents() {

  const unsplashService = unsplashServiceAPI();

  function formSubmit(){
    return addEventListener('submit', function(e){

      e.preventDefault();
      // getSearchTerm();
      const searchTerm = document.getElementById('search').value;
      console.log('Horray! Someone wrote "' + searchTerm + '"!');
      return unsplashService.searchImages(searchTerm);
    });
  }



  return {
    formSubmit

  };

}
