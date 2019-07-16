import React from 'react';


class SearchBar extends React.Component{
    state = {term:''};

    onFormSubmit = (event) => {
        event.preventDefault();
        const temp = this.state.term;
        this.props.onSubmit(temp);
    };


    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className= "field">
                        <label>Image Search</label>
                        <input type="text"
                               value={this.state.term}
                               onChange={e => this.setState({term:e.target.value})}
                        />
                    </div>
                </form>
                <h2>
                    {this.state.term}
                </h2>
            </div>
        );
    }
}

export default SearchBar;

