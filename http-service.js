function httpServiceFactory() {
    function http(method, url, headers, readyCallbackFunction, errorCallbackFunction) {
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                readyCallbackFunction(this);
            }
        };

        // handles network errors
        xhr.onerror = function (error) {
            errorCallbackFunction(error);
        }

        xhr.open(method, url);

        Object.keys(headers).forEach(headerKey => {
            xhr.setRequestHeader(headerKey, headers[headerKey]);
        });

        xhr.send();
    };

    function get(url, headers, successCallbackFunction, errorCallbackFunction) {
        http('GET', url, headers,
            (xhr) => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    successCallbackFunction(JSON.parse(xhr.responseText));
                } // not handling other cases for now
            },
            errorCallbackFunction
        );
    }

    return {
        get
    };
}
