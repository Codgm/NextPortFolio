import Animation from '@/app/components/Home/animation'
import Link from "next/link"
export default function Hero () {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary">안녕하세요 개발자 서규민입니다!
                    <br className="hidden lg:inline-block"/>오늘도 코딩중~
                    </h1>
                    <p className="mb-8 leading-relaxed a dark:text-gray-400">
                        중앙대학교 소프트학부에 재학중인 서규민입니다.
                        현재 주로 프론트엔드 와 UX/UI 디자인을 맏고 있고 
                        인공지능 AI를 주로 서비스 개발을 하고 있습니다!
                    </p>
                    <div className="flex justify-center">
                    <Link href="/Projects" legacyBehavior>
                        <a className="inline-flex text-white dark:text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            프로젝트
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