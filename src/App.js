import React from 'react';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';
import FloatingText from './components/FloatingText/FloatingText';
import VideoBackground from './components/VideoBackground/VideoBackground';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <AudioPlayer />
      <FloatingText />
      <VideoBackground />
    </div>
  );
}