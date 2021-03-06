import React, { useState, useEffect } from "react";

const useAudio = url => {
  const [audio] = useState(new Audio("https://vgmsite.com/soundtracks/pokemon-gameboy-sound-collection/vvdpydwp/101-opening.mp3"));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause(); audio.volume = 0.1;
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button className="audio" onClick={toggle}>{playing ? " Pause " : " Play " }</button>
    </div>
  );
};

export default Player;