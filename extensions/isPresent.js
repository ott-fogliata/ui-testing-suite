// isPresent.js
module.exports.command = function (selector, callback) {
  return this.elements('css selector', selector, results => {
    if (results.status !== 0) { // some error occurred, handle accordingly
	return 0
    }
    callback(results.value.length > 0);
  });
};
