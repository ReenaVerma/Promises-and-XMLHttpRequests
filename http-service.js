function httpServiceFactory() {
    function http(method, url, headers) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
                if (this.readyState == 4) {
                    resolve(this);
                }
            };

            xhr.onerror = function (error) {
                reject(error);
            }

            xhr.open(method, url);

            Object.keys(headers).forEach((headerKey) => {
                xhr.setRequestHeader(headerKey, headers[headerKey]);
            });

            xhr.send();
        });
    };

    function get(url, headers, successCallbackFunction, errorCallbackFunction) {
        return http('GET', url, headers).then((xhr) => {
            if (xhr.status >= 200 && xhr.status < 300) {
                return JSON.parse(xhr.responseText);
            } else {
                // for now we don't care about this case,
                // but we need to return something :)
                return null;
            }
        });
    }

    return {
        get
    };
}
