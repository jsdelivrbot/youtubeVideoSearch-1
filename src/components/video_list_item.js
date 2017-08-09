import React, {Component} from 'react';

class ListItem extends Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.props.onVideoSelected(this.props.video);
	}

	render(){

		const video = this.props.video;
		const imageUrl = video.snippet.thumbnails.default.url;
		const title = video.snippet.title;
		return (
			<li className="list-group-item" onClick={this.handleClick}>
				<div className="media">
					<div className="media-left">
						<img className="media-object" src={imageUrl} alt={title} />
					</div>
					<div className="media-body">
						<h5 className="media-heading">{title}</h5>
					</div>
				</div>

			</li>
		);
	}
}

export default ListItem;
