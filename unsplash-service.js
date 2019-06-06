function UnsplashAPIService() {

  const http = XhrRequestService();

  const searchURL = 'https://api.unsplash.com/search/photos?';
  let page = 0;
  let perPage = 0;

  function searchImages(searchTerm) {
    page = 6;
      perPage = 6;
      // please fix pagination

    return http
      .get(
        `${searchURL}page=${page}&per_page=${perPage}&orientation=squarish&query=${searchTerm}`,
      );
  }

  function getNextPageOfImages(searchTerm) {
    page++;
    perPage += 6;

    return http
      .get(
        `${searchURL}page=${page}&per_page=${perPage}&orientation=squarish&query=${searchTerm}`,
      );
  }

  return {
    searchImages,
    moreImages
  };
}

/*
    Please put in this file every unsplash related thing: apiKay, headers
*/

