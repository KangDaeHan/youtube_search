import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAFfUfVvf8s7sMwwPb9W8KH9L-b3tptftQ'; //AIzaSyCT5YNj0WpEUrt_4K8b3GZ6NoBZTOImXMA 일일트래픽 할당량 오버시 연결 안됨.

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('hello');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY , term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

		return (
			<div>
				<SearchBar onSearchChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos}
				/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));