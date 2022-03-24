module.exports = function (options) {
    return function (req, res, next) {
        console.log(`Date: ${new Date().toISOString()} and URL: ${req.url}`);
        next();
    }
}