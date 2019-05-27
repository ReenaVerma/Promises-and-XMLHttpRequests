function unsplashServiceAPI() {

  const http = xhrRequestService();

  const searchURL = 'https://api.unsplash.com/search/photos?';
  let page = 6;
  let perPage = 6;

  function searchImages(searchTerm) {
    return http
      .get(
        `${searchURL}page=${page}&per_page=${perPage}&orientation=squarish&query=${searchTerm}`,
      );
  }

  function moreImages(searchTerm) {
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
