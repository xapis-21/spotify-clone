import { useRouter } from "next/router";
import { Loader, Error, PlaylistSong } from "../../components";
import { PlayPause } from "../../components/PlayPause";
import { useSelector, useDispatch } from "react-redux";
import { BiTimeFive } from "react-icons/bi";

import { useGetPlaylistTracksQuery } from "../../redux/services/spotifyScraper";

const Playlist = () => {
  const router = useRouter();
  const id = router.query.id;
  const { data, isFetching, error } = useGetPlaylistTracksQuery(id);

  const { playlistDetails, activeSong, isPlaying, currentSongs } = useSelector(
    (state) => state.player
  );

  const { image, desc, name, owner, trackCount, type } = playlistDetails;

  const colors = [
    "from-red-500",
    "from-green-500",
    "from-orange-500",
    "from-purple-500",
    "from-cyan-500",
    "from-pink-500",
    "from-blue-500",
    "from-yellow-500",
    "from-amber-500",
    "from-lime-500",
    "from-emerald-500",
    "from-teal-500",
    "from-sky-500",
    "from-fuchsia-500",
    "from-rose-500",
  ];

  const bgColor = colors[Math.floor(Math.random() * colors.length - 1)];

  if (isFetching) return <Loader title={"Loading songs..."} />;
  // if (error) return <Error error={error} />;
  console.log(currentSongs);

  return (
    <div className="w-full h-full relative flex flex-col">
      <div
        className={`absolute top-0 left-0 h-[50%] bg-gradient-to-b ${bgColor} to-transparent w-full opacity-50 -z-10`}
      />
      <div className="flex w-full p-8 pt-14 items-end">
        <img src={image} className="max-w-[250px] shadow-2xl" />
        <div className="pl-8">
          <div>
            <span className="uppercase text-white/80 text-sm">{type}</span>
            <h1 className="text-4xl font-bold text-white">{name}</h1>
          </div>
          <div className="mt-14">
            <p className="text-white/40 text-sm">{desc}</p>
            <p className="flex space-x-4 text-white font-light mt-2">
              <span>{owner}</span>
              <span>{trackCount} Songs</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black/50 w-full flex-grow backdrop-blur-sm p-8 ">
        <div className="mb-8">
          <PlayPause />
        </div>
        <ul className="space-y-4 h-fit">
          <li className="flex justify-between group  py-1 px-4 rounded-sm border-b border-white/10 pb-8 items-center">
            <div className="flex items-center w-[300px]">
              <div
                className="
        h-8 w-8 text-gray-300/50 grid place-items-center"
              >
                <span className="mr-4 text-gray-300 duration-300">#</span>
              </div>
              <div className="flex flex-col pl-4">
                <h3 className="text-base text-white/80 text-light text-start">
                  TITLE
                </h3>
              </div>
            </div>
            <div className="w-[150px] text-sm text-gray-300 grid place-items-center">
              {type === "playlist" ? "ALBUM" : "SHOW"}
            </div>
            <div className="text-sm text-gray-400">
              <BiTimeFive fontSize={20} />
            </div>
          </li>
          {error ? (
            <div className="w-full grid place-items-center text-gray-400">
              {error?.data.reason}
            </div>
          ) : (
            data?.contents.items.map(
              (
                { id, name, durationMs, durationText, album, podcast, type },
                i
              ) => (
                <li key={id}>
                  <PlaylistSong
                    index={i}
                    id={id}
                    name={name}
                    durationMs={durationMs}
                    durationText={durationText}
                    albumName={type === "episode" ? podcast?.name : album?.name}
                    cover={type === "episode" ? podcast?.cover : album?.cover}
                    artists={type === "episode" ? [] : album?.artists}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    data={data}
                  />
                </li>
              )
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Playlist;
