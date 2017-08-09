import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Search from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAZtgEp9_XgG9z5SeP7sHwXJSRspvFIWv8';

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.searchVideo("apple");
		this.onVideoClickHander = this.onVideoClickHander.bind(this);
		this.onInputChangedHandler = this.onInputChangedHandler.bind(this);
	}


	searchVideo(term){
		Search({key: API_KEY, term: term}, videos => {

			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	onVideoClickHander(video){
		this.setState({selectedVideo: video});
	}

	onInputChangedHandler(term){
		this.searchVideo(term);
	}

	render(){
		const selectedVideo = this.state.selectedVideo;

		return (
			<div>
				<SearchBar onInputChanged={this.onInputChangedHandler} />
				<VideoDetail video={selectedVideo} />
				<VideoList videos={this.state.videos} onVideoSelected={this.onVideoClickHander} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('container') );	
