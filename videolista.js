import React from 'react';

const VideoList = ({ videos, editVideo, deleteVideo }) => {
    return (
        <div>
            <h2>Video List</h2>
            {videos.length > 0 ? (
                <ul>
                    {videos.map(video => (
                        <li key={video.id}>
                            <h3>{video.title}</h3>
                            <p>{video.url}</p>
                            <button onClick={() => editVideo(video)}>Edit</button>
                            <button onClick={() => deleteVideo(video.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No videos available</p>
            )}
        </div>
    );
};

export default VideoList;
