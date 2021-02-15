const User = require('../models/user');

exports.getUsers = (req, res) => {
    User.fetchAll(users => {
        res.render('index.ejs', {
            users: users,
            path: '/'
        });
    });
};

exports.postUser = (req, res) => {
    const user = new User( req.body.imageUrl,
        req.body.name, req.body.achievement);
    user.save();
    res.redirect('/');

};


exports.getFormPage = (req, res) => {
    res.render('form');
};






