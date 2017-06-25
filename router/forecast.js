const Arrow = require('arrow');

module.exports = server =>
    new Arrow.Router({
        name: 'index',
        path: '*',
        method: 'GET',
        description: 'Render the index view',
        action: function (req, res, next) {
            res.render('index', {title: 'Weather App' });
            next();
        }
    }, server.config, server).bind(server.app);