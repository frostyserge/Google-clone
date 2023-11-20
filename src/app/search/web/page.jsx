import Link from "next/link";

export default async function WebSearchPage({searchParams}) {

  const SEARCH_API_KEY = process.env.SEARCH_API_KEY;
  const CONTEXT_KEY = process.env.CONTEXT_KEY;
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${SEARCH_API_KEY}&cx=${CONTEXT_KEY}&q=${searchParams.searchTerm}`);

  if (!response.ok) { 
    throw new Error("Oops...Something went wrong");
  }

  const data = await response.json();

  const results = data.items;

  if(!results) {
    return (
    
    <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-3xl mb-4">Nor results found</h1>
      <p className="text-lg">Try to search for something else or go back to homepage{" "}
        <Link href="/" className="text-blue-500">
          Home
        </Link>
      </p>
    </div>

    )
  }
    return <>{results && results.map(result => <h1>{result.title}</h1>)}</>

}
