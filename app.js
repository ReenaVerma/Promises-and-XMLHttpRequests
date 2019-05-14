window.addEventListener('load', () => {
    const unsplashService = unsplashServiceFactory();
    const domService = domServiceFactory();

    domService.$searchForm.addEventListener('submit', event => {
        event.preventDefault();
        const searchTerm = domService.getSearchTermInputValue();
        if(!searchTerm) {
            return;
        }

        domService.resetDom();

        unsplashService.searchImages(
            searchTerm,
            (response) => {
                const urls = response.results.map(imgData => imgData.urls.regular);
                if (urls.length > 0) {
                    urls.forEach(url => {
                        const $img = domService.createImage(url);
                        domService.addImageToResultsContainer($img);
                    });
                    domService.showMoreButton();
                } else {
                    domService.showErrorMessage(`No results for '${searchTerm}'`);
                }
            },
            () => {
                domService.showErrorMessage(`Ooops.... something went wrong`);
            }
        );
    });

    domService.$moreButton.addEventListener('click', () => {
        domService.hideErrorMessage();

        unsplashService.getNextPage(
            (response) => {
                const urls = response.results.map(imgData => imgData.urls.regular);
                domService.showMoreButton();
                urls.forEach(url => {
                    const $img = domService.createImage(url);
                    domService.addImageToResultsContainer($img);
                });
            },
            () => {
                domService.showErrorMessage(`Ooops.... something went wrong`);
            }
        );
    });
});
