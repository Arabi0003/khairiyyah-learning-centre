'use client';

import { useEffect, useRef, useState } from 'react';

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setVideoLoaded(true);
      video.play().catch(() => {});
    };

    if (video.readyState >= 3) {
      setVideoLoaded(true);
      video.play().catch(() => {});
    } else {
      video.addEventListener('loadeddata', handleLoadedData);
    }

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, []);

  const handleEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <div className="video-container" aria-hidden="true">
      {/* Instant CSS Gradient Background (0ms paint time) */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-midnight to-primary-950" />

      {/* Video Element (Streams in non-blocking background) */}
      <video
        ref={videoRef}
        className={`transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onEnded={handleEnded}
        poster="/images/khairi.png"
        aria-hidden="true"
      >
        <source src="/videos/Khair.mp4" type="video/mp4" />
      </video>

      {/* Dark readable overlay */}
      <div className="video-overlay" />
      <div
        className="absolute inset-0 z-[2] opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at 20% 50%, rgba(184, 134, 11, 0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(22, 101, 52, 0.1) 0%, transparent 50%)',
        }}
      />
    </div>
  );
}
