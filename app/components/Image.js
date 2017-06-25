import React, { PureComponent, PropTypes } from 'react';

export default class Image extends PureComponent {
    render() {
        const { src, width, height } = this.props;

        return (
            <img src={src} width={width} height={height} />
        );
    }
}

Image.defaultProps = {
    'src': '',
    'width': 0,
    'height': 0,
};

Image.propTypes = {
    'src': PropTypes.string.isRequired,
    'width': PropTypes.number.isRequired,
    'height': PropTypes.number.isRequired
};