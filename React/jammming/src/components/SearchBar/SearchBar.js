import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.search = this.search.bind(this);
    }

    handleTermChange(event) {
        this.setState({ term: event.target.value });
    }

    search() {
        this.props.onSearch(this.state.term);
    }
    render() {
        return (
            <div className="SearchBar">
                <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
                <button className="SearchButton">SEARCH</button>
            </div>
        );
    }
}

export default SearchBar;