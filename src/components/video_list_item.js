import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		<li onClick={() => onVideoSelect(video)} className="">
			<div className="">
				<div>
					<img src={imageUrl} className="" />
				</div>
				<div className="">
					<div className="">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	)
}

export default VideoListItem;