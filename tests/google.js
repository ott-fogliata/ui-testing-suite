var loadScript = function(source) {
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
                }
            };
        } else {  //Others
            // script.onload = callback;
        }
        script.src = source;
        head.appendChild(script);
        console.log('script ' + source + ' loaded;')
    }
};

var unleashGremlins = function(ttl) {
    function stop() {
        horde.stop();
    }
    var horde = window.gremlins.createHorde();
    horde.seed(1234);
    // horde.after(callback);
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
            .injectScript('<a href="//cdn.rawgit.com/jpillora/xhook/1.3.1/dist/xhook.min.js">./../node_modules/gremlins.js/gremlins.min.js</a>')
            // .execute(function(selector) {
            //         var list = document.querySelector(selector);
            //         console.log("This will print in the browser itself");
            //         return list.list;
            //     },
            //     [selector],
            //     function(result) {
            //         var hotelsFromDom = result.value;
            //         client.globals.frontEndHotels = result.value;
            //         //console.log(client.globals.frontEndHotels);
            //
            //     })
            // .executeAsync(function (input, done) {
            //         loadScript('./../node_modules/gremlins.js/gremlins.min.js');
            //     },
            //     ['input'],
            //     function (result) {
            //         console.log('result =', result);
            //     })
            // .executeAsync(function (input, done) {
            //         unleashGremlins(50000);
            //     },
            //     ['input'],
            //     function (result) {
            //         console.log('result =', result);
            //     })
            .pause(60000)
            .end();
    }
};