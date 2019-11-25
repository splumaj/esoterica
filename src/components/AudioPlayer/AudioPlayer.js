import React from 'react';
import audioUrl from '../../audio/01-Ahagari.mp3';

export default function AudioPlayer () {
  return (
    <>
      <audio autoPlay>
        <source src={audioUrl} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </>
  )
}