import { HomeCard } from "./";
import Link from "next/link";

const HomeRow = ({ data, name, link }) => {
  return (
    <div className="flex flex-col text-slate-100 my-4">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold pl-4">{name}</h1>
        <Link href={"/"}>
          <a className="text-sm text-gray-400"> SEE ALL</a>
        </Link>
      </header>
      <div className="flex items-center w-full py-2 flex-wrap justify-start lg:flex-nowrap">
        {data?.map(({id,name,owner,images,trackCount,description,cover,artists,type}) => (
          <HomeCard id={id} key={id} name={name} owner={owner} images={images} trackCount={trackCount} desc={description} cover={cover} artists={artists} type={type} />
        ))}
      </div>
    </div>
  );
};

export default HomeRow;
