
export default async function WebSearchPage({searchParams}) {

  const SEARCH_API_KEY = process.env.SEARCH_API_KEY;
  const CONTEXT_KEY = process.env.CONTEXT_KEY;
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${SEARCH_API_KEY}&cx=${CONTEXT_KEY}&q=${searchParams.searchTerm}`);

  if (!response.ok) { 
    throw new Error("Oops...Something went wrong");
  }

  const data = await response.json();
  console.log(data);
  const results = data.items;
  return (
    <>
      {results && results.map(result => <h1>{result.title}</h1>)}
    </>
  )
}
