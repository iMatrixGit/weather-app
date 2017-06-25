import queryString from 'query-string';
const base = 'http://localhost:8080';

const decorateService = ({ url, method, headers, credentials }) =>
    ({ body, query } = {}) => {
        const req = { method, headers, credentials };
        let targetUrl = url;

        if (query) {
            targetUrl = `${url}?${queryString.stringify(query)}`;
        }

        if (body) {
            req.body = JSON.stringify(body);
        }

        return fetch(targetUrl, req)
            .then(res => {
                if (res.status >= 400) {
                    return Promise.reject(res.statusText);
                }

                return res.json();
            })
            .catch(err => console.error(err))
    };

const services = [
    {
        url: `${base}/api/forecast`,
        method: 'GET',
        headers: { 'Accept': 'application/json' },
        credentials: 'same-origin',
        name: 'getForecast'
    }
];

export default services.reduce((services, service) => {
    services[service.name] = decorateService(service);

    return services;
}, {});


