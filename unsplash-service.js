function unsplashServiceAPI() {

  const http = xhrRequestService();

  const searchURL = 'https://api.unsplash.com/search/photos?';
  const page = 6;


  function searchImages(searchTerm) {
    return http

      .get(
        `${searchURL}page=1&per_page=${page}&orientation=squarish&query=${searchTerm}`,
      );
  }

  return {
    searchImages
  };

}
