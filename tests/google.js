var loadScript = function(source, callback) {
    var head = document.getElementsByTagName('head')[0];
    var scripts = head.getElementsByTagName('script');
    var found = false;
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].src === source) {
            found = true;
            break;
        }
    }
    if (!found) {
        console.log('ready to load ' + source);
        var script = document.createElement('script');
        script.type = 'text/javascript';
        if (script.readyState) {  //IE
            script.onreadystatechange = function () {
                if (script.readyState === 'loaded' ||
                    script.readyState === 'complete') {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {  //Others
            script.onload = callback;
        }
        script.src = source;
        head.appendChild(script);
        console.log('script ' + source + ' loaded;')
    }
};

var unleashGremlins = function(ttl, callback) {
    function stop() {
        horde.stop();
        callback();
    }
    var horde = window.gremlins.createHorde();
    horde.seed(1234);
    horde.after(callback);
    window.onbeforeunload = stop;
    setTimeout(stop, ttl);
    horde.unleash();
};

module.exports = {
    'Demo test Google async' : function (browser) {
        browser
            .url('http://www.google.com')
            .waitForElementVisible('body', 1000)
            .setValue('input[type=text]', 'nightwatch')
            .executeAsync(loadScript, './../node_modules/gremlins.js/gremlins.min.js')
            .executeAsync(unleashGremlins, 50000)
            .pause(10000)
            .end();
    }
};