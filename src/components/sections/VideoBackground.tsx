'use client';

import { useEffect, useRef, useState } from 'react';

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => setVideoLoaded(true);
    const handleError = () => setVideoError(true);

    video.addEventListener('canplaythrough', handleCanPlay);
    video.addEventListener('error', handleError);

    // Force play on load
    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setVideoError(true);
        });
      }
    };

    playVideo();

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

  // Guarantee loop playback fallback for mobile browser edge cases
  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <div className="video-container" aria-hidden="true">
      {/* Fallback background */}
      <div
        className="video-fallback absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-fallback.jpg')",
          backgroundColor: '#14532d',
          backgroundBlendMode: 'overlay',
        }}
      />

      {!videoLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-midnight to-primary-900" />
      )}

      {!videoError && (
        <video
          ref={videoRef}
          className={`transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onEnded={handleVideoEnded}
          poster="/images/khairi.png"
          aria-hidden="true"
        >
          <source src="/videos/Khair.mp4" type="video/mp4" />
        </video>
      )}

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
