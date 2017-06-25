const ejs = require('ejs');

module.exports = server => {
    const engine = { ejs };

    engine.createRenderer = (content) => {
        return (filename, opts, callback) => {
            if (!content) {
                content = require('fs').readFileSync(filename, 'utf8').toString();
            }
            callback(null, ejs.render(content, opts));
        }
    };
    engine.extension = 'ejs';
    server.middleware.registerRendererEngine(engine);
};