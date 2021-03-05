const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
        console.log('request has a user')
        next();
    } else {
        console.log('request does not have a user');
        res.redirect('/sessions/new');
    }
}

module.exports = isAuthenticated;   