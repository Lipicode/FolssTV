import React from 'react';
const VideoCard = ({ video, onSelect }) => {
return (
<div
className="bg-gray-800 shadow-lg hover:shadow-2xl cursor-pointer"
onClick={() => onSelect(video.id.videoId)}
>
<iframe
width="100%"
height="200"
src={`https://www.youtube.com/embed/${video.id.videoId}`}
frameBorder="2"
allowFullScreen
className="rounded-1g"
></iframe>
<p className="mt-3 font-semibold text-lg text-center">{video.snippet.title}</p>
</div>
);
};
export default VideoCard;
