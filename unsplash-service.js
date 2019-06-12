function UnsplashAPIService() {
  const http      = XhrService();
  const searchURL = 'https://api.unsplash.com/search/photos?';
  const apikey    = 'ea89472bcd9a0938b2da37e34240e6fac38ba3115598dd62f16cdc4f0cabc489';
  let page        = 0;
  let perPage     = 0;

  const headers = {
    'Authorization': `Client-ID ${apikey}`,
    'Accept-Version': 'v1'
  };

  function getImages(searchTerm) {
    page = 1;
    perPage = 6;

    return http
      .get(`${searchURL}page=${page}&per_page=${perPage}&orientation=squarish&query=${searchTerm}`,
        headers
      );
  }

  function getNextPageOfImages(searchTerm) {
    page++;
    perPage += 6;

    return http
      .get(`${searchURL}page=${page}&per_page=${perPage}&orientation=squarish&query=${searchTerm}`,
        headers
      );
  }

  return {
    getImages,
    getNextPageOfImages
  };
}
