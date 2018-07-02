// Example data
//
// const values = {
//   name: 'Edd',
//   lastName: 'Yerburgh',
// }

// Command
const each = require('async/each');

module.exports.command = function(values) {
    var keys = Object.keys(values);
    var self = this;

    each(keys, function (key) {
        self.clearValue('[name="' + key +'"]');
        self.setValue('[name="' + key +'"]', values[key]);
        console.log(key + " => " + values[key]);
    }, function(err) {
        if(err) {
            console.log(err)
        }
        self.emit('complete');
    });

    return self;
};

// How to use in Nightwatch

// browser
//   .url(URL)
//   .fillForm(data)

