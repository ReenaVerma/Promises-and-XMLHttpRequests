function httpFactory() {
    function http(method, url, headers, readyCallbackFunction, body) {
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                readyCallbackFunction(this);
            }
        };

        xhr.open(method, url);

        Object.keys(headers).forEach(headerKey => {
            xhr.setRequestHeader(headerKey, headers[headerKey]);
        });

        xhr.send(body);
    };

    function get(url, headers, successCallbackFunction, errorCallbackFunction) {
        http('GET', url, headers, (xhr) => {
            if (xhr.status >= 200 && xhr.status < 300) {
                successCallbackFunction(JSON.parse(xhr.responseText));
            } else {
                errorCallbackFunction(JSON.parse(xhr.responseText));
            }
        });
    }

    return {
        get
    };
}
