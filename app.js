document.addEventListener('DOMContentLoaded', function() {

  console.log('app.js loaded');
  const input = document.getElementsByName('searchbox')[0];
  const results = document.getElementById('results');

  // HANDLE CHANGE ON INPUT
  document.getElementById('form').addEventListener('submit', getApi);

  // MAKE XMLHttpRequest();
  function xhr() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.unsplash.com/search/photos?page=1&per_page=12&orientation=squarish&query=${input.value}`, true);  //true allows

    xhr.setRequestHeader('Authorization', 'Client-ID ea89472bcd9a0938b2da37e34240e6fac38ba3115598dd62f16cdc4f0cabc489' );
    xhr.setRequestHeader( 'Header', 'Accept-Version: v1' );

    xhr.onload = function () {

      if (xhr.readyState === 4) { //looks at the request's readyState to see if the transaction is complete

        if (xhr.status === 200) { // If yes abnd HTTP status is 200, dumps the received content
          const response = JSON.parse(xhr.responseText);
          console.log('JSON', response);
          displayImages(response);

        } else {
          console.error(xhr.statusText);  //if error, error message appears
        }
      }
    };
    xhr.send(null); //initiates the request. The callback routine is called whenever the state of the request changes.
  }

  // DISPLAYE IMAGES
  function displayImages(response) {

    let result = '';

    response.results.forEach(elem => {
      console.log('foreach', elem);

      result +=
          `<div class="res">
            <h3> Title: ${elem.alt_description} </h3>
            <h3> created: ${elem.created_at} </h3>
            </h4>likes: ${elem.likes}</h3>
            <img src="${elem.urls.small}" />
          </div>`;
      results.innerHTML = result;
    });
  }

  // SUBMIT FUNCTION
  function getApi(e) {
    e.preventDefault();
    console.log('Horray! Someone wrote "' + input.value + '"!');
    xhr();
  }


});
