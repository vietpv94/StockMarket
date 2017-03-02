/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
 res.render('index', {
   title: 'Stock Index'
 });
};
