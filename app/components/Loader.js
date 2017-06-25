import React, { PureComponent, PropTypes } from 'react';

export default class Loader extends PureComponent {
    render() {
        const { size } = this.props;

        return (
            <div style={{ width: size, height: size }} className="loader" />
        );
    }
}

Loader.defaultProps = {
    'size': 24
};

Loader.propTypes = {
    'size': PropTypes.number.isRequired
};