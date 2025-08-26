import { useEffect, useState } from "react";
import axios from "axios";
import "./YouTubVedio.css";

const YouTubeVideo = () => {
  const [videos, setVideos] = useState([]);
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const CHANNEL_ID = "UCE_M8A5yxnLfW0KghEeajjw"; // keep channel ID in code

  useEffect(() => {
    // const fetchVideos = async () => {
    //   try {
    //     const res = await fetch(
    //       `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=9&order=date&type=video&key=${API_KEY}`
    //     );
    //     const data = await res.json();
    //     setVideos(data.items || []);
    //   } catch (err) {
    //     console.error("Error fetching YouTube videos:", err);
    //   }
    // };
    const fetchVideos = async () => {
      try {
        const res = await axios.get(
          "https://youtube.googleapis.com/youtube/v3/search",
          {
            params: {
              part: "snippet",
              channelId: CHANNEL_ID,
              maxResults: 9,
              order: "date",
              type: "video",
              key: API_KEY,
            },
          }
        );

        setVideos(res.data.items || []);
      } catch (err) {
        console.error("Error fetching YouTube videos:", err);
      }
    };

    fetchVideos();
  }, [API_KEY]);

  return (
    <div className="youtube-section">
      <h2 className="youtube-title">Latest Videos</h2>
      <div className="youtube-grid">
        {videos.map((video, index) => (
          <div key={video?.id?.videoId || index} className="youtube-card">
            <a
              href={`https://www.youtube.com/watch?v=${video?.id?.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={video?.snippet?.thumbnails?.high?.url}
                alt={video?.snippet?.title || "YouTube Video"}
                className="youtube-thumb"
              />
            </a>
            <div className="youtube-content">
              <h3 className="youtube-title-card">
                {video?.snippet?.title || "Untitled"}
              </h3>
              <p className="youtube-description">
                {video?.snippet?.description || "No description available."}
              </p>
              <p className="youtube-date">
                Published:{" "}
                {new Date(video?.snippet?.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeVideo;
