window.addEventListener('load', () => {
    const accessKey = '893bcc21763b08a72212b54b817f6803392ebd2a737edc6c5af5807451c1b9d1';
    const baseUrl = 'https://api.unsplash.com';
    const searchUrl = `${baseUrl}/search/photos`;

    const headers = new Headers({
        'Authorization': `Client-ID ${accessKey}`,
        'Content-Type': 'application/json',
        'Accept-Version': 'v1'
    });

    const request = new Request(`${searchUrl}?page=1&query=sci-fi`, {
        method: 'GET',
        headers: headers
    });


    fetch(request)
        .then(response => response.json())
        .then(json => json.results.map(imgData => imgData.urls.regular))
        .then(urls => {
            urls.forEach(url => {
                const $img = document.createElement('img');
                $img.src = url;
                // document.body.append($img);
            });

            return urls;
        })
        .then(imgUrl => console.log(imgUrl));
});
