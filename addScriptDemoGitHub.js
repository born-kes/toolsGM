var locationFiles = '/toolsGM/build/';

var bodyContainer = document.getElementsByTagName('head')[0];
function addLinkCss(file) {
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = file;
    bodyContainer.appendChild(link);
}
function require(file, async=false){
    console.log(file)
    var script = document.createElement('script');
    if(async) script.async = true;
    script.type = 'text/javascript';
    script.src = file;
    bodyContainer.appendChild(script);
}


var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};
function loadReqire () {
    getJSON(locationFiles + 'package.json',
        function (err, data) {
            console.log(err, data)
            if (err !== null) {
                alert('Something went wrong: ' + err);
            } else {
                data.js.map(url => require(locationFiles + url));
                data.jsAsync.map(url => require(url, true));
                data.css.map(url => addLinkCss(locationFiles + url));

            }
        });
}
setTimeout(loadReqire, 1000, true);