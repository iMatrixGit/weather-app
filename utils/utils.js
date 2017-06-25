const getLocationFilter = ({ name, lat, lon }) =>
    name ? `q=${name}` : `lat=${lat}&lon=${lon}`;

module.exports = {
    getLocationFilter
};