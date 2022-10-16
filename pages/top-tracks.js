import { Track } from "../components";
import { useGetTopChartsQuery } from "../redux/services/spotifyScraper";

const TopTracks = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  return (
    <div className="flex w-full flex-wrap space-x-4 pt-4 px-4 justify-start">
      {data?.tracks.map(({ id, name, album, artists, type }, i) => (
        <Track
          id={id}
          key={id}
          name={name}
          cover={album?.cover}
          artists={artists}
          type={type}
          data={data?.tracks}
          index={i}
        />
      ))}
    </div>
  );
};

export default TopTracks;
