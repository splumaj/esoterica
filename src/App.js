import React from 'react';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';
import FloatingText from './components/FloatingText/FloatingText';
import VideoBackground from './components/VideoBackground/VideoBackground';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <AudioPlayer />
      <FloatingText top="14rem" right="27rem">この世界の運命は</FloatingText>
      <FloatingText top="18rem" right="16rem">悪人の負担だ</FloatingText>
      <VideoBackground />
    </div>
  );
}