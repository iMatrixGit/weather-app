import React, { PureComponent, PropTypes } from 'react';
import { Text } from '.';

export default class WindInfo extends PureComponent {
    render() {
        const { label, speed } = this.props;

        return (
            <div className="wind-info">
                <Text
                    className="label"
                    text={label}
                />
                <Text
                    className="speed"
                    text={`${speed} m/s`}
                />
            </div>
        );
    }
}

WindInfo.defaultProps = {
    'label': '',
    'speed': ''
};

WindInfo.propTypes = {
    'label': PropTypes.string.isRequired,
    'speed': PropTypes.number.isRequired
};