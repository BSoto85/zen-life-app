import { getAllMusic } from "../api/fetch";
import React, { useState, useRef, useEffect } from "react";
import "./SongList.css";

const SongList = () => {
  const [songs, setSongs] = useState([]);
  const [selectedSong, setselectedSong] = useState(null);
  const videoRef = useRef(null);

  const handleSongClick = (song) => {
    if (selectedSong && selectedSong.id === song.id) {
      togglePlayPause();
    } else {
      setselectedSong(song);
      playSong(song);
    }
  };

  const playSong = (song) => {
    if (videoRef.current) {
      videoRef.current.src = song.url;
      videoRef.current.play();
      videoRef.current.onended = () => {
        setselectedSong(null);
      };
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    getAllMusic()
      .then((data) => {
        setSongs(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="song-list-container">
      <h1>Song List</h1>
      <ol className="song-list">
        {songs &&
          songs.map((song) => (
            <li key={song.id} onClick={() => handleSongClick(song)}>
              {song.songName}
            </li>
          ))}
      </ol>
      {selectedSong && (
        <div className="now-playing">
          <h2>Now Playing</h2>
          <p>Song: {selectedSong.songName}</p>
          <video ref={videoRef} controls width="390" height="300" loop />
        </div>
      )}
    </div>
  );
};

export default SongList;
