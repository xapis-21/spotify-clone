import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { RiUser6Line } from "react-icons/ri";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full text-white/80 flex justify-between py-2 px-8">
      <div className="flex items-center space-x-4">
        <button className="text-2xl rounded-full h-10 w-10 hover:bg-slate-100/10 hover:text-white grid place-items-center duration-200">
          <HiChevronLeft fontSize={30} />
        </button>
        <button className="text-2xl rounded-full h-10 w-10 hover:bg-slate-100/10 hover:text-white grid place-items-center duration-200">
          <HiChevronRight fontSize={30} />
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <Link href={"/"}>
          <a className=" rounded-full h-12 w-12  bg-slate-100/10 hover:bg-slate-100/20 grid place-items-center text-white">
            <AiFillHome fontSize={30} />
          </a>
        </Link>
        <form className="flex items-center bg-slate-100/10 px-4 py-2 rounded-full space-x-2 md:min-w-[400px] min-w-[320px] group focus-within:border-white border-2 border-transparent">
          <BiSearch fontSize={30} />
          <input
            type="text"
            placeholder="What do you want to listen to?"
            className="bg-transparent px-2 w-full placeholder:text-sm outline-none"
          />
        </form>
      </div>
      <div className=" rounded-full bg-slate-100/10 h-12 w-12 grid place-items-center hover:bg-slate-100/20 duration-200">
        <button className="bg-black p-2 rounded-full">
          <RiUser6Line fontSize={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
