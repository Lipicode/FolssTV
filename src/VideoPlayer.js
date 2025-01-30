import React from 'react';

const VideoPlayer = ({ video, comments, onLike, onDislike, onComment }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <iframe
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
        className="rounded-lg"
      ></iframe>
      <div className="flex justify-between mt-4">
        <button className="text-white hover:text-blue-400" onClick={onLike}>
          Like
        </button>
        <button className="text-white hover:text-red-400" onClick={onDislike}>
          Dislike
        </button>
        <button className="text-white hover:text-green-400" onClick={onComment}>
          Comment
        </button>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Comments</h3>
        {comments.length === 0 ? (
          <p>No Comments lol</p>
        ) : (
          <ul>
            {comments.map((comment) => (
              <li key={comment.id} className="border-b border-gray-600 py-3.5">
                <p className="font-semibold">{comment.snippet.topLevelComment.snippet.authorDisplayName}</p>
                <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
