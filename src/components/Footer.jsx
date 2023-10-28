import CountryIP from "./CountryIP";

export default function Footer() {
  return (
    <footer>
        <div>
            <CountryIP />
        </div>
        <div>
            <ul>
                <li className="link">
                    About
                </li>
                <li className="link">
                    Advertising
                </li>
                <li className="link">
                    Business
                </li>
                <li className="link">
                    How Search Works
                </li>
            </ul>
            <ul>
                <li className="link">
                    Privacy
                </li>
                <li className="link">
                    Terms
                </li>
                <li className="link">
                    Settings
                </li>
            </ul>
        </div>
    </footer>
  )
}
