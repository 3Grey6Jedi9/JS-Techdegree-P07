import React, { Component } from 'react';


class SearchForm extends Component {

    state = {

        search: '',

    };

    handleSubmit = (e) => {

        e.preventDefault();
        // Handle search submission here

    };

    handleChange = (e) => {

        this.setState({search: e.target.value});

    };

    render() {

        return (

            <form className="search-form" onSubmit={this.handleSubmit}>

                <input

                    type="search"
                    name="search"
                    placeholder="Search"
                    value={this.state.search}
                    onChange={this.handleChange}
                    required
                    />
                <button type="submit" className="search-button"></button>

            </form>

        );

    }
}


export default SearchForm;