function domEvents() {

  function formElement() { // function nameing
      const form = document.getElementById('form');
      // please refactor
    return form;
    }

  function returnSearchTerm() { // getSearchTerm is more comoon
    const searchTerm = document.getElementById('search').value;
    return searchTerm;
  }

  function displaySearchTerm(searchTerm) {
    return document.getElementById('resultsText').innerHTML = `You searched for ${searchTerm}`;
  }

  function moreButton() { // function naming
      const moreButton = document.getElementById('more');
      // please refactor
    return moreButton;
  }


    // function displayImages(images)
    // handle only images, not response object
  function displayImages(response) {
    const res = JSON.parse(response.response);

    let result = '';
    res.results.forEach(elem => {
      console.log('foreach', elem); // please remove at the end

      result +=
          `<div class="res">
            <h2> Title: ${elem.alt_description} </h2>
            <h3>likes: ${elem.likes}</h3>
            <img src="${elem.urls.small}" />
          </div>`;
      const results = document.getElementById('results').innerHTML = result;
    });
    document.getElementById('more').classList.remove('displayNone');

    return results;
  }

  function networkError(error) { // function naming
      const errorPlaceholder = document.getElementById('XMLHttpError');
    //   please put the top of the module
    errorPlaceholder.innerHTML = 'Network connection error! Check you internet connection!';
    return errorPlaceholder;
  }

  function removeError() {
    const errorPlaceholder = document.getElementById('XMLHttpError');
    errorPlaceholder.classList.add('displayNone');
    return errorPlaceholder;
  }


  return {
    formElement,
    returnSearchTerm,
    displaySearchTerm,
    moreButton,
    displayImages,
    networkError,
    removeError
  };
}
