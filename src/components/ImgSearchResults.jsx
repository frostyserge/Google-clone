import Link from "next/link";


export default function ImgSearchResults({ results }) {
  return (
    <div>
        <div>
            {results.items.map((result) => (
                <div key={result.link} className="">
                    <div className="group">
                        <Link href={result.image.contextLink}>
                            <img src={result.link} alt={result.title} />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
