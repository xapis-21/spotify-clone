import Link from "next/link";
import { PlayPauseSmall } from "./PlayPause";



const PlaylistSong = ({ id, name, durationMs, durationText,albumName,cover,index,artists }) => {




  return (
    <div className="flex justify-between group hover:bg-gray-500/20 py-1 px-2 rounded-sm">
      <div className="flex items-center w-[300px] justify-start">
        <div
          className="h-8 w-8 text-gray-300/50 grid place-items-center mr-4"
        >
          <span className=" text-gray-300 group-hover:hidden duration-300">
            {index + 1}
          </span>
          <span className="hidden group-hover:block duration-300">
            <PlayPauseSmall />
          </span>
        </div>
        <div className="h-12 w-12">
          <img src={cover && cover[0].url} alt="" className="h-full w-full" />
        </div>
        <div className="flex flex-col pl-4 items-start">
          <h3 className="text-base text-white/80 text-light truncate">
            {name}
          </h3>
          <p className="text-sm flex">
            {artists?.map((item) => (
              <Link href={`artist/${item?.id}`} key={item?.id}>
                <a className="group hover:underline text-gray-400 px-1 truncate">
                  <span>{item.name}</span>
                  <span className="group-last-of-type:hidden block">,</span>
                </a>
              </Link>
            ))}
          </p>
        </div>
      </div>
      <div className="truncate w-[150px] text-[12px] text-gray-300/50 grid place-items-center">
        {albumName}
      </div>
      <div className="text-sm text-gray-400">{durationText}</div>
    </div>
  );
};

export default PlaylistSong;
