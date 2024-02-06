import React, { useEffect, useState } from "react";

const SongList = () => {
  const [songs, setSongs] = useState([]);
  const [audio] = useState(new Audio());
  const [selectedSong, setselectedSong] = useState();

  useEffect(() => {
    getAllMusic()
      .then((data) => {
        setSongs(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSongClick = (song) => {
    if (selectedSong && selectedSong.id === song.id) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    } else {
      audio.src = song.url;
      audio.play();
      setselectedSong(song);
    }
  };

  audio.addEventListener("ended", () => {
    setselectedSong(null);
  });

  return (
    <div>
      <h1>Song List</h1>
      <ul>
        {songs &&
          songs.map((song) => (
            <li key={song.id} onClick={() => handleSongClick(song)}>
              {song.songName}
            </li>
          ))}
      </ul>
      {selectedSong && (
        <div>
          <h2>Now Playing</h2>
          <p>Song: {selectedSong.songName}</p>
          <p>ID: {selectedSong.id}</p>
        </div>
      )}
    </div>
  );
};

export default SongList;
