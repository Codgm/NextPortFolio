import Animation from '@/app/components/Home/animation'
import Link from "next/link"
export default function Hero () {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary">Hello, I'm developer Seo Gyumin!
                    <br className="hidden lg:inline-block"/>I'm coding again today~
                    </h1>
                    <p className="mb-8 leading-relaxed a dark:text-gray-400">
                    I'm Seo Gyumin, a student of the Department of Soft Science at Chung-Ang University. 
                    Currently, I'm mainly in charge of front-end and UX/UI design and mainly developing AI services!
                    </p>
                    <div className="flex justify-center">
                    <Link href="/Projects" legacyBehavior>
                        <a className="inline-flex text-white dark:text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Projects
                        </a>
                    </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Animation/>
            </div>
        </>
    )
}