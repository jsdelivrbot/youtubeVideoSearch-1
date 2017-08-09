import React, {Component} from 'react';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.inputChange = this.inputChange.bind(this);
	}

	inputChange(e){
		this.props.onInputChanged(e.target.value);
	}

	render(){
		return (
			<div className="search-bar">
				<input type="text" name="searchVideo" onInput={this.inputChange} />
			</div>
		);
	}

}

export default SearchBar;