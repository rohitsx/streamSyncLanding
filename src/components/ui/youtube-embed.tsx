import React from "react";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, title }) => (
  <div className="aspect-video rounded-xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-gray-700/50">
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      loading="lazy"
      allowFullScreen
    />
  </div>
);

export default YouTubeEmbed;
