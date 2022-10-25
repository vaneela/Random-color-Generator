
import React, { useState } from 'react';
import Player from './Player';
import { AudioPlaylist } from 'ts-audio';
// Music import

// Pictures import

export default function App() {
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);


  // Songs Array

  const playlist =AudioPlaylist({
      files: songs.map((song) => song.src),
    });

  const handlePlay = () => {
    playlist.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    playlist.pause();
    setIsPlaying(false);
  };

  const handleSkip = () => {
    playlist.next();
    setIsPlaying(true);
    setCurrentSong(
      (currentSong) => (currentSong + 1 + songs.length) % songs.length
    );
  };

  const handlePrevious = () => {
    playlist.prev();
    setIsPlaying(true);
    setCurrentSong(
      (currentSong) => (currentSong - 1 + songs.length) % songs.length
    );
  };
  return (
    <>
      <div className="App">
        <div className="c-player">
          <div className="c-player--details">
            {' '}
            <div className="details-img">
              {' '}
              <img src={songs[currentSong].img_src} alt="img" />
            </div>
            <h1 className="details-title">{songs[currentSong].title}</h1>
            <h2 className="details-artist">{songs[currentSong].artist}</h2>
          </div>
          <Player
            play={handlePlay}
            pause={handlePause}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            next={handleSkip}
            prev={handlePrevious}
          />
        </div>
      </div>
    </>
  );
}

