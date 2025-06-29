import React from 'react';

interface EmbeddedVideoProps {
  src: string;
  title: string;
}

const EmbeddedVideo: React.FC<EmbeddedVideoProps> = React.memo(({ src, title }) => {
  return (
    <div className="my-4 sm:my-6"> {/* Consistent margin with other media elements */}
      <iframe
        className="w-full aspect-video rounded-lg shadow-lg bg-slate-900/50" // Responsive, styled like project image
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy" // Improves initial load performance
      ></iframe>
    </div>
  );
});

export default EmbeddedVideo;
