window.addEventListener('load', () => {
    const http = httpFactory();

    const accessKey = '893bcc21763b08a72212b54b817f6803392ebd2a737edc6c5af5807451c1b9d1';
    const baseUrl = 'https://api.unsplash.com';
    const searchUrl = `${baseUrl}/search/photos`;
    const $searchForm = document.getElementById('search-form');
    const $searchTermInput = document.getElementById('search-term');
    const $searchResultContainer = document.getElementById('search-result-container');
    const $moreButton = document.getElementById('more-button');
    const $errorMessageContainer = document.getElementById('error-message-container');
    let page = 1;
    let searchTerm;

    $searchForm.addEventListener('submit', event => {
        event.preventDefault();
        page = 1;
        searchTerm = $searchTermInput.value;
        if(!searchTerm) {
            return;
        }

        $moreButton.classList.add('hidden');
        $searchResultContainer.innerHTML = '';
        $errorMessageContainer.classList.add('hidden');
        $errorMessageContainer.innerHTML = '';

        http.get(
            `${searchUrl}?page=${page}&query=${searchTerm}`,
            {
                'Authorization': `Client-ID ${accessKey}`,
                'Content-Type': 'application/json',
                'Accept-Version': 'v1'
            },
            (response) => {
                const urls = response.results.map(imgData => imgData.urls.regular);
                if (urls.length > 0) {
                    urls.forEach(url => {
                        const $img = document.createElement('div');
                        $img.setAttribute('style', `background-image: url('${url}');`);
                        $img.classList.add('image');
                        $searchResultContainer.append($img);
                    });
                    $moreButton.classList.remove('hidden');
                } else {
                    $errorMessageContainer.classList.remove('hidden');
                    $errorMessageContainer.innerHTML = `No results for '${searchTerm}'`;
                }
            },
            (error) => {
                $errorMessageContainer.classList.remove('hidden');
                $errorMessageContainer.innerHTML = `Ooops.... something went wrong`;
            }
        );
    });

    $moreButton.addEventListener('click', () => {
        $errorMessageContainer.classList.add('hidden');
        $errorMessageContainer.innerHTML = '';
        page++;

        http.get(
            `${searchUrl}?page=${page}&query=${searchTerm}`,
            {
                'Authorization': `Client-ID ${accessKey}`,
                'Content-Type': 'application/json',
                'Accept-Version': 'v1'
            },
            (response) => {
                const urls = response.results.map(imgData => imgData.urls.regular);
                $moreButton.classList.remove('hidden');
                urls.forEach(url => {
                    const $img = document.createElement('div');
                    $img.setAttribute('style', `background-image: url('${url}');`);
                    $img.classList.add('image');
                    $searchResultContainer.append($img);
                });
            },
            (error) => {
                $errorMessageContainer.classList.remove('hidden');
                $errorMessageContainer.innerHTML = `Ooops.... something went wrong`;
            }
        );
    });
});
