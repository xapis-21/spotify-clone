import Link from "next/link";
import { TextTruncate } from "react-text-truncate";
import { useSelector, useDispatch } from "react-redux";
import { setPlaylistDetails } from "../redux/features/playerSlice";
const HomeCard = ({ id, name, owner, images, trackCount, desc,cover,artists,type }) => {

  const dispatch = useDispatch();

  const getPlaylistMeta = () => {
    dispatch(
      setPlaylistDetails({
        desc,
        image: images ? images[0][0]?.url : cover[0]?.url,
        type,
        name,
        owner: artists ? artists[0].name : owner.name,
        trackCount
      })
    );

    console.log("hello>>>>", {
      desc,
      image: images ? images[0][0]?.url : cover[0]?.url,
      type,
      name,
      owner: artists ? artists[0].name : owner.name,
      trackCount,
    });
  };
  return (
    <Link href={`/playlist/${id}`}>
      <a
        className="w-1/4 max-w-[300px] min-w-[200px] p-4 bg-gray-500/10 hover:bg-gray-500/20 duration-200 rounded-lg m-4"
        onClick={getPlaylistMeta}
      >
        <img
          src={images ? images[0][0]?.url : cover[0]?.url}
          alt=""
          className="w-full shadow-xl rounded"
        />

        <div className="flex flex-col mt-2">
          <h3 className="text-sm font-semibold">
            By {artists ? artists[0].name : owner.name}
          </h3>
          <p className="text-[12px] text-gray-400">{trackCount} tracks</p>
        </div>
      </a>
    </Link>
  );
};

export default HomeCard;
