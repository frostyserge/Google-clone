import Image from 'next/image';
import Link from 'next/link';
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";

export default function SearchHeader() {
    return (
        <header>
            <div className="">
                <Link href={'/'}>
                    <Image
                        width={'120'}
                        height={'40'}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                    />
                </Link>
                <div>
                    <SearchBox />
                </div>
                <div>
                <RiSettings3Line />
                </div>
            </div>
        </header>
    );
}
