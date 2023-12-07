// Exporting a function that checks if a user is logged in
const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next()
    }
};

module.exports = withAuth;