function domServiceFactory() {
    const $searchForm = document.getElementById('search-form');
    const $searchTermInput = document.getElementById('search-term');
    const $searchResultContainer = document.getElementById('search-result-container');
    const $moreButton = document.getElementById('more-button');
    const $errorMessageContainer = document.getElementById('error-message-container');

    function resetDom() {
        $moreButton.classList.add('hidden');
        $searchResultContainer.innerHTML = '';
        $errorMessageContainer.classList.add('hidden');
        $errorMessageContainer.innerHTML = '';
    }

    function getSearchTermInputValue() {
        return $searchTermInput.value;
    }

    function createImage(url) {
        const $img = document.createElement('div');
        $img.setAttribute('style', `background-image: url('${url}');`);
        $img.classList.add('image');
        return $img;
    }

    function addImageToResultsContainer($img) {
        $searchResultContainer.append($img);
    }

    function addListOfImagesToResultsContainer(imageUrls) {
        imageUrls.forEach(url => {
            const $img = createImage(url);
            addImageToResultsContainer($img);
        });
    }

    function showMoreButton() {
        $moreButton.classList.remove('hidden');
    }

    function showErrorMessage(message) {
        $errorMessageContainer.classList.remove('hidden');
        $errorMessageContainer.innerHTML = message;
    }

    function hideErrorMessage() {
        $errorMessageContainer.classList.add('hidden');
        $errorMessageContainer.innerHTML = '';
    }

    return {
        resetDom,
        getSearchTermInputValue,
        addListOfImagesToResultsContainer,
        showMoreButton,
        showErrorMessage,
        hideErrorMessage,
        $searchForm,
        $moreButton
    };
}
