import { Link } from "react-router-dom";


export const Footer = () => {
    return (
        <footer className="bg-white border-b-2 border-gray-200 px-2 sm:px-4 py-2 dark:bg-gray-900 dark:border-b-1 dark:border-gray-900">
            <div className="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Cinebry™</Link>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="https://www.linkedin.com/in/olaide-muheeb-76a4b210a/" target="_blank" className="mr-4 hover:underline md:mr-6 ">Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/olaide-muheeb-76a4b210a/" target="_blank" className="mr-4 hover:underline md:mr-6">Twitter</a>
                    </li>
                    <li>
                        <a href="https://www.behance.net/olaidemuheeb" target="_blank" className="mr-4 hover:underline md:mr-6">Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.behance.net/olaidemuheeb" target="_blank" className="hover:underline">Youtube</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
