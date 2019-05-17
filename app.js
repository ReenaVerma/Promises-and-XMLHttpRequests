window.addEventListener('load', () => {
    const unsplashService = unsplashServiceFactory();
    const domService = domServiceFactory();

    domService.$searchForm.addEventListener('submit', event => {
        event.preventDefault();
        const searchTerm = domService.getSearchTermInputValue();
        if (!searchTerm) {
            return;
        }

        domService.resetDom();

        unsplashService.searchImages(searchTerm)
            .then((response) => {
                const urls = response.results.map(imgData => imgData.urls.regular);
                if (urls.length > 0) {
                    domService.addListOfImagesToResultsContainer(urls);
                    domService.showMoreButton();
                } else {
                    domService.showErrorMessage(`No results for '${searchTerm}'`);
                }
            })
            .catch(() => {
                domService.showErrorMessage(`Ooops.... something went wrong`);
            });
    });

    domService.$moreButton.addEventListener('click', () => {
        domService.hideErrorMessage();

        unsplashService.getNextPage()
            .then((response) => {
                const urls = response.results.map(imgData => imgData.urls.regular);
                domService.addListOfImagesToResultsContainer(urls);
            })
            .catch(() => {
                domService.showErrorMessage(`Ooops.... something went wrong`);
            });
    });
});
