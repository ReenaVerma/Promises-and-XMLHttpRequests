function xhrRequestService() {

  const apikey = 'ea89472bcd9a0938b2da37e34240e6fac38ba3115598dd62f16cdc4f0cabc489';

  function http(method, apiURL) {

    return new Promise((resolve, reject) => {

      const xhr = new XMLHttpRequest();

      // SET API UNSPLASH AUTHORIZATION AND HEADER
      // xhr.setRequestHeader(headers);

      // THIS ALLOWS REQUEST TO BE HANDLED ASYNCRONOUSLY
      xhr.open(method, apiURL, true);

      // alert(JSON.stringify(headers));
      // console.dir(headers);
      xhr.setRequestHeader('Authorization', `Client-ID ${apikey}`);
      xhr.setRequestHeader( 'Header', 'Accept-Version: v1' );


      xhr.onload = function () {
      // EVENT HANDLER OBJECT ASSIGNED TO ONLOAD ATTRIBUTE
      //LOOKS AT THE READYSTATE TO SEE IF TRANSACTION IS COMPLETE
        if (xhr.readyState === 4) {

          // IF HTTP STATUS 200, RECEIVE/STORE THE RESPONSE
          if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            console.log('JSON', response);
            // displayImages(response);

          } else {
            // IF THERE IS AN ERROR DISPLAY
            console.error('ERROR', xhr.statusText);
            // resultsText.innerHTML = xhr.statusText;
          }

          // IF THERE IS NO CALL TO THE API VIA CONTENTTYPE HEADER, RETURN SEARCH AGAIN ERROR MESSAGE
          const contentType = xhr.getResponseHeader('link');
          if (contentType === null) {
            // resultsText.innerHTML = `No results for "${input.value}"! Search again!`;

          } else {
            // resultsText.innerHTML = `You search for "${input.value}"`;
          }
        }
      };

      // NETWORK CONNECTION ERROR
      xhr.onerror = function(error) {
        // resultsText.innerHTML = 'Network connection error! Check you internet connection!';
        reject(error);
        console.log('Network connection error! Check you internet connection!');
      };



      //


      // INITIATES THE REQUEST.
      // THE CALLBACK ROUTINE IS CALLED WHENEVER THE STATE CHANGES
      xhr.send();
    });
  }


  function get(apiURL) {
    return http('GET', apiURL);
  }

  return {
    get
  };

}

// xhr.onload = function () {
//   // EVENT HANDLER OBJECT ASSIGNED TO ONLOAD ATTRIBUTE
//   //LOOKS AT THE READYSTATE TO SEE IF TRANSACTION IS COMPLETE
//   if (xhr.readyState === 4) {
//
//     // IF HTTP STATUS 200, RECEIVE/STORE THE RESPONSE
//     if (xhr.status === 200) {
//       const response = JSON.parse(xhr.responseText);
//       console.log('JSON', response);
//       // displayImages(response);
//
//     } else {
//       // IF THERE IS AN ERROR DISPLAY
//       console.error('ERROR', xhr.statusText);
//       // resultsText.innerHTML = xhr.statusText;
//     }
//
//     // IF THERE IS NO CALL TO THE API VIA CONTENTTYPE HEADER, RETURN SEARCH AGAIN ERROR MESSAGE
//     const contentType = xhr.getResponseHeader('link');
//     if (contentType === null) {
//       // resultsText.innerHTML = `No results for "${input.value}"! Search again!`;
//
//     } else {
//       // resultsText.innerHTML = `You search for "${input.value}"`;
//     }
//   }
// };
