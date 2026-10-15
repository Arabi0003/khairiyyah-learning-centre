PLACEHOLDER: Add your hero background video here.

Required files:
- hero-bg.mp4 (H.264, 1080p, 15-30 seconds, under 8MB)
- hero-bg.webm (VP9 format for better browser support)
- hero-fallback.jpg (1920x1080 fallback image)

Recommended content:
- Aerial shot of the school campus
- Students learning in classrooms
- Islamic architecture details
- Peaceful nature/garden scenes

Optimization tips:
- Compress with HandBrake or FFmpeg
- Remove audio track (muted anyway)
- Target 24fps, medium bitrate
- FFmpeg command: ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset slow -an -vf scale=1920:1080 hero-bg.mp4
