import Head from "next/head";
import Image from "next/image";
import { HomeRow, Loader, Error } from "../components";

import { useGetHomePageOverviewQuery } from "../redux/services/spotifyScraper";

export default function Home() {
  const { data, isFetching, error } = useGetHomePageOverviewQuery();

  if (isFetching) return <Loader title={"Loading songs..."} />;
  if (error) return <Error error={error} />;

  return (
    <div className="flex flex-col pt-4 px-4">
      {data?.genres.map(({ id, name, contents }) => (
        <HomeRow key={id} name={name} data={contents.items} />
      ))}
    </div>
  );
}
