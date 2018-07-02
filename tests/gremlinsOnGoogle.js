// https://github.com/marmelab/gremlins.js#installation

var gremlinsJs = "https://rawgit.com/ott-fogliata/ui-testing-suite/master/lib/gremlins.js";

module.exports = {
    'Gremlins on Google': function (browser) {
        browser
            .url('http://www.google.com')
            .waitForElementVisible('body', 1000)
            .setValue('input[type=text]', 'nightwatch')
            .injectScript(gremlinsJs)
            .pause(2000)
            .execute(function (data) {
                console.log("gremlins horde started!");
                var horde = gremlins.createHorde();
                horde.unleash();

            })
            .pause(12000)
            .assert.elementPresent("body")
            .assert.elementPresent("#hplogo")
            .click("input[name=btnK]")
            .pause(2000)
            .injectScript(gremlinsJs)
            .executeAsync(function (data) {
                console.log("gremlins horde started!");
                var horde = gremlins.createHorde();
                horde.unleash();

            })
            .pause(12000)
            .end()
    }
};