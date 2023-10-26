"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidMicrophone } from "react-icons/bi";

export default function HomeSearch() {

    const [input, setInput] = useState("");
    const router = useRouter();
    function handleSubmit (e) {
        e.preventDefault();
        if(!input.trim()) return;
        router.push(`/search/web?searchTerm=${input}`)

    }

  return (
    <>
        <form onSubmit={handleSubmit} className="flex w-full mt-5 mx-auto max-w-[90%] border border-solid border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl">
            <AiOutlineSearch className="text-xl text-gray-500" />
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" className="flex-grow focus:outline-none" />
            <BiSolidMicrophone className="text-lg" />
        </form>
        <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8">
            <button className="btn">
                Google Search
            </button>
            <button className="btn">
                I'm Feeling Lucky!
            </button>
        </div>
    </>
  )
}
