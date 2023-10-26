import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidMicrophone } from "react-icons/bi";

export default function HomeSearch() {
  return (
    <>
        <form className="flex w-full mt-5 mx-auto max-w-[90%] border border-solid border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl">
            <AiOutlineSearch className="text-xl text-gray-500" />
            <input type="text" className="flex-grow focus:outline-none" />
            <BiSolidMicrophone className="text-lg" />
        </form>
        <div>
            <button>
                Google Search
            </button>
            <button>
                I'm Feeling Lucky!
            </button>
        </div>
    </>
  )
}
