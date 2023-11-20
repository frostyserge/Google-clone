"use client"

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function Pagination() {

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get("searchTerm");
    const startIndex = +searchParams.get("start") || 1;

  return (
    <div className="flex px-10 pb-4 text-blue-700 justify-between sm:justify-start sm:space-x-44 sm:px-0">
        {startIndex >= 10 && (
            <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}>
                <div>
                    <FaChevronLeft className="flex flex-col cursor-pointer items-center hover:underline" />
                    <p>Previous</p>
                </div>
            </Link>
        )}
        {startIndex <= 90 && (
            <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}>
                <div>
                    <FaChevronRight className="flex flex-col cursor-pointer items-center hover:underline" />
                    <p>Next</p>
                </div>
            </Link>
        )}
    </div>
  )
}
