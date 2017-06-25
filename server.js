const Arrow = require('arrow');
const basicAuth  = require('express-basic-auth');
const addRenderEngine = require('./utils/render-engine');
const forecastRouter = require('./router/forecast');
const config = require('./config/config');

// Create Arrow instance
const server = new Arrow();

// Create forecastAPI
const forecastAPI = require('./api/forecast')(server);

// Express static middleware
server.app.use('/js', server.express.static(`${__dirname}/build`));
server.app.use('/assets', server.express.static(`${__dirname}/public`));
server.app.use(basicAuth({
    users: { [config.authUser]: config.authSecret },
    challenge: true
}));

// Forecast endpoint
server.app.get('/api/forecast', (req, res) => {
    const { lat, lon, name } = req.query;

    if (!(lat && lon) && !name) {
        res.status(400).send('Invalid location data');
    }

    server.getAPI('/api/getForecast', 'GET').execute({ lat, lon, name }, (err, apiResponse) => {
        if (err) {
            server.logger.error(err);
        } else {
            res.status(200).json(apiResponse.result)
        }
    });
});

// Forecast router
forecastRouter(server);

// Setup render engine
addRenderEngine(server);

server.on('starting', () => {
    server.addAPI(forecastAPI);
});

server.start();