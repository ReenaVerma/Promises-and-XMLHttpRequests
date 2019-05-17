function unsplashServiceFactory() {
    const http = httpServiceFactory();

    const accessKey = '893bcc21763b08a72212b54b817f6803392ebd2a737edc6c5af5807451c1b9d1';
    const baseUrl = 'https://api.unsplash.com';
    const searchUrl = `${baseUrl}/search/photos`;
    const headers = {
        'Authorization': `Client-ID ${accessKey}`,
        'Content-Type': 'application/json',
        'Accept-Version': 'v1'
    };

    let page = 1;
    let searchTerm;

    function searchImages(term) {
        page = 1;
        searchTerm = term;

        return http.get(
            `${searchUrl}?page=${page}&query=${searchTerm}`,
            headers
        );
    }

    function getNextPage() {
        page++;

        return http.get(
            `${searchUrl}?page=${page}&query=${searchTerm}`,
            headers
        );
    }

    return {
        searchImages,
        getNextPage
    };
}
