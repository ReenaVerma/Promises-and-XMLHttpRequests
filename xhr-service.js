function xhrRequestService() {

  const apikey = 'ea89472bcd9a0938b2da37e34240e6fac38ba3115598dd62f16cdc4f0cabc489';

  function http(method, apiURL) {

    return new Promise((resolve, reject) => {

      const xhr = new XMLHttpRequest();

      xhr.open(method, apiURL, true);

      xhr.setRequestHeader('Authorization', `Client-ID ${apikey}`);
      xhr.setRequestHeader( 'Header', 'Accept-Version: v1' );

      xhr.onload = function () {
        if (xhr.readyState === 4) {

          if (xhr.status === 200) {
            resolve(xhr);

          } else {
            console.error('ERROR', xhr.statusText);
            reject(xhr);
          }

          const contentType = xhr.getResponseHeader('x-total');
          if (contentType === '0') {
            document.getElementById('XMLHttpError').innerHTML = 'No results. Search again!';
          }
        }
      };
      // NETWORK CONNECTION ERROR
      xhr.onerror = function() {
        reject(xhr);
      };

      xhr.send(null);
    });
  }

  function get(apiURL) {
    return http('GET', apiURL);
  }

  return {
    get
  };
}
