const Arrow = require('arrow');
const request = require('request');
const config = require('../config/config');
const { getLocationFilter } = require('../utils/utils');

const fetchForecastData = filter => new Promise((resolve, reject) => {
    request({
        uri: `${config.owmUrl}?${filter}&APPID=${config.owmKey}&units=${config.resUnits}&cnt=${config.resLimit}`,
        json: true,
    }, (err, response, body) => {
        if (err) {
            reject(err);
        } else {
            reject(body);
        }
    });
});

module.exports = server => new Arrow.API({
        group: 'forecast',
        path: '/api/getForecast',
        method: 'GET',
        description: 'Get 5 day forecast',
        action: function(req, res, next) {
            const filter = getLocationFilter(req.params);

           fetchForecastData(filter)
               .then(response => next(null, response))
               .catch(err => next(err));
        }
    }, server.config, server);
