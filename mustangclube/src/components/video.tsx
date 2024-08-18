"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function FullScreenVideo() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        src="/mustang.mp4"
        autoPlay
        loop
      />

      {/* Opacity Layer */}
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50"></div>
    </div>
  );
}
