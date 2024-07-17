import React, { useState, useEffect } from 'react';

const VideoForm = ({ addVideo, updateVideo, currentVideo }) => {
    const [video, setVideo] = useState({ title: '', url: '' });

    useEffect(() => {
        if (currentVideo) {
            setVideo(currentVideo);
        } else {
            setVideo({ title: '', url: '' });
        }
    }, [currentVideo]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVideo({ ...video, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentVideo) {
            updateVideo(video);
        } else {
            addVideo(video);
        }
        setVideo({ title: '', url: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={video.title}
                onChange={handleChange}
                required
            />
            <input
                type="url"
                name="url"
                placeholder="URL"
                value={video.url}
                onChange={handleChange}
                required
            />
            <button type="submit">{currentVideo ? 'Update' : 'Add'} Video</button>
        </form>
    );
};

export default VideoForm;
