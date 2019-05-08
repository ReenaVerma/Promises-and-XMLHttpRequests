window.addEventListener('load', () => {
    const accessKey = '893bcc21763b08a72212b54b817f6803392ebd2a737edc6c5af5807451c1b9d1';
    const baseUrl = 'https://api.unsplash.com';
    const searchUrl = `${baseUrl}/search/photos`;
    const $searchForm = document.getElementById('search-form');
    const $searchTermInput = document.getElementById('search-term');
    const $searchResultContainer = document.getElementById('search-result-container');
    const $moreButton = document.getElementById('more-button');
    let page = 1;
    let searchTerm;

    $searchForm.addEventListener('submit', event => {
        event.preventDefault();
        $searchResultContainer.innerHTML = '';
        page = 1;
        searchTerm = $searchTermInput.value;

        const request = new Request(`${searchUrl}?page=${page}&query=${searchTerm}`, {
            method: 'GET',
            headers: new Headers({
                'Authorization': `Client-ID ${accessKey}`,
                'Content-Type': 'application/json',
                'Accept-Version': 'v1'
            })
        });

        fetch(request)
            .then(response => response.json())
            .then(json => json.results.map(imgData => imgData.urls.regular))
            .then(urls => {
                $moreButton.classList.remove('hidden');
                urls.forEach(url => {
                    const $img = document.createElement('div');
                    $img.setAttribute('style', `background-image: url('${url}');`);
                    $img.classList.add('image');
                    $searchResultContainer.append($img);
                });
            });
    });

    $moreButton.addEventListener('click', () => {
        page++;

        const request = new Request(`${searchUrl}?page=${page}&query=${searchTerm}`, {
            method: 'GET',
            headers: new Headers({
                'Authorization': `Client-ID ${accessKey}`,
                'Content-Type': 'application/json',
                'Accept-Version': 'v1'
            })
        });

        fetch(request)
            .then(response => response.json())
            .then(json => json.results.map(imgData => imgData.urls.regular))
            .then(urls => {
                $moreButton.classList.remove('hidden');
                urls.forEach(url => {
                    const $img = document.createElement('div');
                    $img.setAttribute('style', `background-image: url('${url}');`);
                    $img.classList.add('image');
                    $searchResultContainer.append($img);
                });
            });
    });
});
