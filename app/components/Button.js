import React, { PureComponent, PropTypes } from 'react';
import classNames from 'classnames';

export default class Button extends PureComponent {
    render() {
        const { type, text, className, disabled, onClick } = this.props;

        return (
            <button
                className={classNames(
                    'button',
                    className,
                    { 'disabled': disabled }
                )}
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