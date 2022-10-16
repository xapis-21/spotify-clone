import Link from "next/link";
import { BiLibrary, BiAlbum } from "react-icons/bi";
import { GiMusicSpell, GiMusicalNotes } from "react-icons/gi";
import { SiApplemusic } from "react-icons/si";
import { useSelector, useDispatch } from "react-redux";

const Sidebar = () => {
  const { activeSong } = useSelector((state) => state.player);

  const sidebarLinks = [
    {
      title: "Your Library",
      path: "/",
      icon: <BiLibrary fontSize={25} />,
    },
    {
      title: "Top tracks",
      path: "top-tracks",
      icon: <SiApplemusic fontSize={25} />,
    },
    {
      title: "Top Artists",
      path: "top-artists",
      icon: <GiMusicSpell fontSize={25} />,
    },
  ];
  return (
    <div className="h-full flex flex-col text-slate-200/80 bg-gray-500/10 backdrop-blur-lg w-full max-w-[300px] pt-4 px-4 rounded-lg justify-between">
      <ul className="flex flex-col space-y-4">
        {sidebarLinks.map(({ title, path, icon }) => (
          <li key={path} className="group hover:text-white p-2 px-4 rounded-md">
            <Link href={path}>
              <a className="flex items-center space-x-4">
                <span>{icon}</span> <span className="text-sm">{title}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <img src={activeSong?.image} alt="" />
    </div>
  );
};

export default Sidebar;
