
module.exports = { // adapted from: https://git.io/vodU0
    'Guinea Pig Assert Title': function(browser) {
        browser
            .url('https://saucelabs.com/test/guinea-pig')
            .waitForElementVisible('body', 1000)
            .assert.title('I am a page title - Sauce Labs')
            .pause(1000)
            .execute(function(){document.getElementById('fbemail').value = 'gremlins@horde.com';}) //move it to separated command
            .execute(function(){document.getElementById('comments').value = 'Lorem Ipsum...';}) //move it to separated command
            .pause(1000)
            .saveScreenshot('reports/guinea-pig-test.png')
            .click('.jumpButton')
            .assert.elementPresent("#fbemail")
            .pause(2000)
            .end();
    }
};