import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import VidoListItem from './video_list_item';

class VideoList extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const items = this.props.videos.map( video => <VidoListItem key={video.etag} video={video} onVideoSelected={this.props.onVideoSelected} /> );
		return (
			<ul className="col-md-4 list-group">
				{items}
			</ul>
		);
	}
}

export default VideoList;