import React, { PureComponent, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Input, Button } from '../components';
import { inputSearchText } from '../actions/search';
import { fetchForecast } from '../actions/forecast';

class SearchContainer extends PureComponent {
    constructor() {
        super();

        this.onSearchTextChange = this.onSearchTextChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSearchTextChange({ value }) {
        const { inputSearchText } = this.props;

        inputSearchText(value);
    }

    onSubmit(e) {
        const { searchText, fetchForecast } = this.props;

        // Prevent default form behavior on submit
        e.preventDefault();

        fetchForecast({ name: searchText });
    }

    render() {
        const { searchText } = this.props;

        return (
        <form className="search-container" onSubmit={this.onSubmit}>
            <Input
                name="search"
                type="text"
                value={searchText}
                placeholder="Your city name"
                onChange={this.onSearchTextChange}
            />
            <Button
                text="Search"
                disabled={searchText.length < 2}
                onClick={this.onSubmit}
            />
        </form>
        );
    }
}

SearchContainer.defaultProps = {
    'searchText': ''
};

SearchContainer.propTypes = {
    'searchText': PropTypes.string.isRequired,
    'inputSearchText': PropTypes.func.isRequired,
    'fetchForecast': PropTypes.func.isRequired,
};

export default connect(
    state => ({
        searchText: state.search.get('text')
    }),
    dispatch => bindActionCreators({
        inputSearchText,
        fetchForecast
    }, dispatch)
)(SearchContainer);