import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { PlayPause } from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const HomeCard = ({ id, name, cover, artists, type, data, index }) => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(
      setActiveSong({
        song: {
          name: name,
          image: cover[0].url,
          artists: artists,
        },
        data,
        i: index,
      })
    );

    dispatch(playPause(true));
  };
  return (
    <div className="w-1/4 max-w-[300px] min-w-[200px] p-4 bg-gray-500/10 hover:bg-gray-500/20 duration-200 rounded-lg m-4 group">
      <div className="w-full h-fit relative isolate">
        <img
          src={cover && cover[0]?.url}
          alt=""
          className="w-full shadow-xl rounded"
        />
        <div className="w-full h-full absolute top-0 left-0 hidden group-hover:flex justify-end items-end z-10">
          <PlayPause
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            name={name}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        </div>
      </div>

      <div className="flex flex-col mt-2">
        <h3 className="text-sm font-semibold text-white">{name}</h3>
        <p className="text-[12px] text-gray-400">
          {artists?.map((item) => (
            <span key={item.name} className="pr-1">
              {item.name}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default HomeCard;
