import React from 'react';
import videoUrl from '../../video/swing.mp4';
import { Video } from './style.js';

export default function VideoBackground () {
  return (
    <>
      <Video id="background-video" loop autoPlay>
        <source src={videoUrl} type="video/mp4" />
        <source src={videoUrl} type="video/ogg" />
        Your browser does not support the video tag.
      </Video>
    </>
  )
}