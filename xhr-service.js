function xhrRequestService() {

  const apikey = 'ea89472bcd9a0938b2da37e34240e6fac38ba3115598dd62f16cdc4f0cabc489';

  function http(method, apiURL) {

    const xhr = new XMLHttpRequest();

    // THIS ALLOWS REQUEST TO BE HANDLED ASYNCRONOUSLY
    xhr.open(method, apiURL, true);

    xhr.setRequestHeader('Authorization', `Client-ID ${apikey}`);
    xhr.setRequestHeader( 'Header', 'Accept-Version: v1' );

    xhr.onload = function () {
      if (xhr.readyState === 4) {

        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          console.log('JSON RESPONSE', response);

        } else {
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
    xhr.onerror = function() {
      // resultsText.innerHTML = 'Network connection error! Check you internet connection!';
      console.log('Network connection error! Check you internet connection!');
    };

    xhr.send(null);
  }


  function get(apiURL) {
    return http('GET', apiURL);
  }

  return {
    get
  };
}
