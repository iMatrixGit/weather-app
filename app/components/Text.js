import React, { PureComponent, PropTypes } from 'react';

export default class Text extends PureComponent {
    render() {
        const { text, className } = this.props;

        return (
            <div className={className}>
                {text}
            </div>
        );
    }
}

Text.defaultProps = {
    'text': ''
};

Text.propTypes = {
    'text': PropTypes.string.isRequired
};