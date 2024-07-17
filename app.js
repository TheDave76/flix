import React, { useState } from 'react';
import VideoList from './VideoList';
import VideoForm from './VideoForm';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);

    const addVideo = (video) => {
        setVideos([...videos, { ...video, id: Date.now() }]);
    };

    const updateVideo = (updatedVideo) => {
        setVideos(videos.map(video => video.id === updatedVideo.id ? updatedVideo : video));
    };

    const deleteVideo = (id) => {
        setVideos(videos.filter(video => video.id !== id));
    };

    const editVideo = (video) => {
        setCurrentVideo(video);
    };

    return (
        <div>
            <h1>Video CRUD App</h1>
            <VideoForm addVideo={addVideo} updateVideo={updateVideo} currentVideo={currentVideo} />
            <VideoList videos={videos} editVideo={editVideo} deleteVideo={deleteVideo} />
        </div>
    );
};

export default App;
