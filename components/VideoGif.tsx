
import React from 'react';

interface VideoGifProps {
  src: string;
  title?: string;
  width?: string;
}

const VideoGif: React.FC<VideoGifProps> = ({ src, title, width }) => {
  return (
    <div 
      className="my-4 sm:my-6" 
      style={{ 
        width: width || '100%' 
      }}
    >
      <video
        className="w-full h-auto rounded-lg shadow-lg bg-slate-900/50"
        src={src}
        title={title}
        autoPlay
        loop
        muted
        playsInline
        controls
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoGif;