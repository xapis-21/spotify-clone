import { FaPause, FaPlay } from "react-icons/fa";

export const PlayPause = ({
  isPlaying,
  activeSong,
  name,
  handlePause,
  handlePlay,
}) => (
  <div className="bg-green-500 h-16 w-16 grid place-items-center rounded-full hover:scale-105 duration-200 cursor-pointer">
    {isPlaying && activeSong?.name === name ? (
      <FaPause size={30} className="text-black" onClick={handlePause} />
    ) : (
      <FaPlay size={30} className="text-black" onClick={handlePlay} />
    )}
  </div>
);

export const PlayPauseSmall = ({
  isPlaying,
  activeSong,
  name,
  handlePause,
  handlePlay,
}) => (
  <div className="rounded-full duration-200 cursor-pointer">
    {isPlaying && activeSong?.name === name ? (
      <FaPause size={12} className="text-slate-300" onClick={handlePause} />
    ) : (
      <FaPlay size={12} className="text-slate-300" onClick={handlePlay} />
    )}
  </div>
);
