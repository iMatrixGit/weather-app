import React, { PureComponent, PropTypes } from 'react';

export default class Input extends PureComponent {
    constructor() {
        super();

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        const { name, onChange } = this.props;

        onChange({ event, name, value: e.target.value });
    }

    render() {
        const { name, type, value, placeholder } = this.props;

        return (
            <input
                className="input"
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={this.onChange}
            />
        );
    }
}

Input.defaultProps = {
    'name': 'defaultInput',
    'type': 'text',
    'value': ''
};

Input.propTypes = {
    'name': PropTypes.string.isRequired,
    'type': PropTypes.string.isRequired,
    'value': PropTypes.string.isRequired,
    'placeholder': PropTypes.string,
    'onChange': PropTypes.func.isRequired
};