import React, { PureComponent, PropTypes } from 'react';

export default class Button extends PureComponent {
    render() {
        const { type, text, disabled, onClick } = this.props;

        return (
            <button
                className="button"
                type={type}
                disabled={disabled}
                onClick={onClick}
            >
                {text}
            </button>
        );
    }
}

Button.defaultProps = {
    'type': 'button',
    'text': 'Submit',
    'disabled': false
};

Button.propTypes = {
    'type': PropTypes.string.isRequired,
    'text': PropTypes.string.isRequired,
    'disabled': PropTypes.bool,
    'onClick': PropTypes.func
};