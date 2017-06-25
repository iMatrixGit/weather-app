const Arrow = require('arrow');
const request = require('request');
const config = require('../config/config');

module.exports = server => new Arrow.API({
        group: 'forecast',
        path: '/api/getForecast',
        method: 'GET',
        description: 'Get 5 day forecast',
        action: function(req, res, next) {
            // TODO: Create helper function
            const { lat, lon, name } = req.params;
            let filter = '';

            if (name) {
                filter = `q=${name}`;
            } else {
                filter = `lat=${lat}&lon=${lon}`;
            }

            // TODO: user Promises
            request({
                uri: `${config.owmUrl}?${filter}&APPID=${config.owmKey}&units=${config.resUnits}&cnt=${config.resLimit}`,
                json: true,
            }, (err, response, body) => {
                next(null, body)
            });
        }
    }, server.config, server);
