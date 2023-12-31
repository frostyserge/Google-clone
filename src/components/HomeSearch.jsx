'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiSolidMicrophone } from 'react-icons/bi';

export default function HomeSearch() {
    const [input, setInput] = useState('');
    const router = useRouter();
    const [randomLoading, setRandomLoading] = useState(false);
    function handleSubmit(e) {
        e.preventDefault();
        if (!input.trim()) return;
        router.push(`/search/web?searchTerm=${input}`);
    }

    async function randomSearch() {
        setRandomLoading(true);
        const response = await fetch(
            `https://random-word-api.herokuapp.com/word`
        )
            .then((res) => res.json())
            .then((data) => data[0]);
        if (!response) return;
        router.push(`/search/web?searchTerm=${response}`);
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="flex w-full mt-5 mx-auto max-w-[90%] border border-solid border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
            >
                <AiOutlineSearch className="text-xl text-gray-500 mr-5" />
                <input
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    type="text"
                    className="flex-grow focus:outline-none"
                    placeholder=""
                />
                <BiSolidMicrophone className="text-lg ml-5" />
            </form>
            <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8">
                <button onClick={handleSubmit} className="btn">
                    Google Search
                </button>
                <button
                    disabled={randomLoading}
                    onClick={randomSearch}
                    className="btn flex items-center justify-center"
                >
                    {randomLoading ? (
                        <img
                            src="spinner2.svg"
                            alt="loading..."
                            className="h-6 text-center"
                        />
                    ) : (
                        "I'm Feeling Lucky!"
                    )}
                </button>
            </div>
        </>
    );
}
