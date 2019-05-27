document.addEventListener('DOMContentLoaded', function() {

  // const unsplashService = unsplashServiceAPI();
  const dom = domEvents();

  // const searchTerm = 'manhattan';
  // const searchTerm = document.getElementById('search').value;
  // console.log('st.value', searchTerm);




  // VARIABLES
  // const input = document.getElementsByName('searchbox')[0];


  // const results = document.getElementById('results');
  // const resultsText = document.getElementById('resultsText');
  // const moreButton = document.getElementById('more');
  // const apikey = 'ea89472bcd9a0938b2da37e34240e6fac38ba3115598dd62f16cdc4f0cabc489';
  // let page = 0;

  // HIDE "MORE" BUTTON WHEN SCRIPT LOADS
  // moreButton.classList.add('displayNone');

  // SUBMIT EVENT LISTENER ON FORM
  const form = document.getElementById('form');
  //
  // function getApi(e) {
  //   e.preventDefault();
  //   console.log('Horray! Someone wrote "' + searchTerm + '"!');


  dom.formSubmit(form)
    // .then(() => {
    //   unsplashService.searchImages;
    // });
  // unsplashService.searchImages();
  // .then((response) => {
  // console.log('response', response);
  // });
  // }

  //
  // page = 6;
  // xhr(page);
  // moreButton.classList.remove('displayNone');



  // MAKE XMLHTTPREQUEST();
  // function xhr() {
  //   const xhr = new XMLHttpRequest();
  //   // THIS ALLOWS REQUEST TO BE HANDLED ASYNCRONOUSLY
  //   xhr.open('GET', `https://api.unsplash.com/search/photos?page=1&per_page=${page}&orientation=squarish&query=${input.value}`, true);
  //
  //   // SET API UNSPLASH AUTHORIZATION AND HEADER
  //   xhr.setRequestHeader('Authorization', `Client-ID ${apikey}`);
  //   xhr.setRequestHeader( 'Header', 'Accept-Version: v1' );
  //
  //   xhr.onload = function () {
  //     // EVENT HANDLER OBJECT ASSIGNED TO ONLOAD ATTRIBUTE
  //     //LOOKS AT THE READYSTATE TO SEE IF TRANSACTION IS COMPLETE
  //     if (xhr.readyState === 4) {
  //
  //       // IF HTTP STATUS 200, RECEIVE/STORE THE RESPONSE
  //       if (xhr.status === 200) {
  //         const response = JSON.parse(xhr.responseText);
  //         console.log('JSON', response);
  //         displayImages(response);
  //
  //       } else {
  //         // IF THERE IS AN ERROR DISPLAY
  //         console.error('ERROR', xhr.statusText);
  //         resultsText.innerHTML = xhr.statusText;
  //       }
  //
  //       // IF THERE IS NO CALL TO THE API VIA CONTENTTYPE HEADER, RETURN SEARCH AGAIN ERROR MESSAGE
  //       const contentType = xhr.getResponseHeader('link');
  //       if (contentType === null) {
  //         resultsText.innerHTML = `No results for "${input.value}"! Search again!`;
  //
  //       } else {
  //         resultsText.innerHTML = `You search for "${input.value}"`;
  //       }
  //     }
  //   };
  //
  //
  //   // NETWORK CONNECTION ERROR
  //   xhr.onerror = function() {
  //     resultsText.innerHTML = 'Network connection error! Check you internet connection!';
  //   };
  //
  //   // INITIATES THE REQUEST.
  //   // THE CALLBACK ROUTINE IS CALLED WHENEVER THE STATE CHANGES
  //   xhr.send(null);
  // }
  //
  //
  // // DISPLAY RESULT/IMAGES
  // function displayImages(response) {
  //   let result = '';
  //
  //   response.results.forEach(elem => {
  //     console.log('foreach', elem);
  //
  //     result +=
  //         `<div class="res">
  //           <h2> Title: ${elem.alt_description} </h2>
  //           <h3>likes: ${elem.likes}</h3>
  //           <img src="${elem.urls.small}" />
  //         </div>`;
  //     results.innerHTML = result;
  //   });
  // }
  //
  // // SUBMIT FORM FACTIONS

  //
  //
  // // ONCLICK RETURN 12 RESULTS
  // moreButton.onclick = function() {
  //   page += 6;
  //   xhr(page);
  //   moreButton.classList.add('displayNone');
  // };

});
