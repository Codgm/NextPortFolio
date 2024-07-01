"use client";

import Link from 'next/link';
import DarkModeToggleButton from './dark-mode-toggle-button';
import Image from 'next/image';


export default function Header () {

    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/" legacyBehavior>
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <span className="text-4xl font-bold text-indigo-600 relative z-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-50">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                    </svg>
                            </span>
                            <span className="ml-3 text-xl">SGM Portfolio</span>
                        </a>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

                        <Link href="/" legacyBehavior>
                            <a className="mr-5 hover:text-gray-900">Home</a>
                        </Link>

                        <Link href="/Projects" legacyBehavior>
                            <a className="mr-5 hover:text-gray-900">Projects</a>
                        </Link>

                        <Link href="/Skills" legacyBehavior>
                            <a className="mr-5 hover:text-gray-900">Skills</a>
                        </Link>

                        <Link href="/Contacts" legacyBehavior>
                            <a className="mr-5 hover:text-gray-900">Contacts</a>
                        </Link>

                    </nav>
                    <DarkModeToggleButton/>
                </div>
            </header>
        </>
    )
}