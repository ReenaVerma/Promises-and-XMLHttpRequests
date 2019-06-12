function XhrService() {
  function http(method, apiURL, headers) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, apiURL, true);

      Object.keys(headers).forEach((headerKey) => {
        xhr.setRequestHeader(headerKey, headers[headerKey]);
      });

      xhr.onload = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr);
          } else {
            reject(xhr);
          }
        }
      };

      xhr.onerror = function() {
        reject(xhr);
      };
      xhr.send(null);
    });
  }

  function get(apiURL, headers) {
    return http('GET', apiURL, headers);
  }

  return {
    get
  };
}
