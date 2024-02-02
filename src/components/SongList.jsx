import React, { useState } from "react";



const SongList = ({songs}) => {
console.log(songs)
  const [ audio ] = useState(new Audio());
  const [ selectedSong, setselectedSong ]= useState();


  const handleSongClick = (song) =>{
    if (selectedSong && selectedSong.id === song.id){
      if (audio.paused){
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
    {songs && songs.map((song) => (
      <li key={song.id} onClick={() => handleSongClick(song)}>{song.songName}</li>
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
