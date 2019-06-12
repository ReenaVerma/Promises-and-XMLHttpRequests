function DomEvents() {
  const form                = document.getElementById('form');
  const morebutton          = document.getElementById('moreButton');
  const resultsPlaceholder  = document.getElementById('resultsText');
  const errorPlaceholder    = document.getElementById('erroPlaceholder');
  const imagesContainer     = document.getElementById('imagesContainer');
  let collectionOfImages    = '';

  const getFormElement = () => {
    return form;
  };

  const getMoreButton = () => {
    return morebutton;
  };

  const getSearchTerm = () => {
    const searchTerm = document.getElementById('search').value;
    return searchTerm;
  };

  const displaySearchTerm = (searchTerm) => {
    return resultsPlaceholder.innerHTML = `You searched for ${searchTerm}`;
  };

  const displayImages = (imageURLs) => {
    for (var i = 0; i < imageURLs.length; i++) {
      collectionOfImages +=
        `<div class="resultsItem">
          <img src="${imageURLs[i]}" />
        </div>`;
      imagesContainer.innerHTML = collectionOfImages;
    }
    morebutton.classList.remove('displayNone');
    return imagesContainer;
  };

  const showNetworkError = () => {
    errorPlaceholder.innerHTML = 'Network connection error! Check you internet connection!';
    return errorPlaceholder;
  };

  return {
    getFormElement,
    getSearchTerm,
    displaySearchTerm,
    getMoreButton,
    displayImages,
    showNetworkError
  };
}
