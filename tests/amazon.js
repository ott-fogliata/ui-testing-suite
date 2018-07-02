
module.exports = {
    'Amazon.it Test': function (browser) {
        browser
            .url('http://www.amazon.it')
            .waitForElementVisible('body', 1000)
            .pause(500)
            .waitForElementVisible('#twotabsearchtextbox', 1000);


        browser.expect.element('.nav-logo-base.nav-sprite').to.be.present;
        browser.expect.element('.cropped-image-map-center-alignment').to.have.css('position').which.equals('absolute');

        browser
            .execute(function(){document.getElementById('twotabsearchtextbox').value = 'gremlins';}) //move it to separated command
            .click('input[type=submit].nav-input')
            .waitForElementVisible("body", 2000)
            .pause(2000);

        browser.expect.element('#leftNavContainer').to.be.visible;

        browser.click('#result_0 .a-fixed-left-grid-col a')
            .pause(2000);

        browser.expect.element('#imgTagWrapperId').to.be.visible;

        browser
            .end();
    }
};