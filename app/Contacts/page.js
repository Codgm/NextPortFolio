import Layout from "../components/layout";

export default function Contacts () {
    return (
        <Layout>
            <div className="flex justify-center items-center h-full">
                <div className="container lg:w-4/5 px-5 py-6 sm:pb-24 pb-12 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center items-center justify-center">
                        <div className="p-4 w-full sm:w-1/4">
                            <a href="https://github.com/Codgm" target="_blanck">
                                <img alt="Github Logo" fetchPriority="high" width="100" height="100" decoding="async" data-nimg="1" 
                                className="w-full sm:h-16 h-8 transform transition duration-500 hover:scale-110"
                                src="/github.ico.svg"></img>
                            </a>
                            <p className="hidden sm:inline leading-relaxed mt-2">
                                <a href="https://github.com/Codgm" target="_blank">https://github.com/Codgm</a>
                            </p>
                        </div>
                        <div className="p-4 w-full sm:w-1/4">
                            <a href="mailto:sgm438@gmail.com" target="_blanck">
                                <img alt="Gmail Logo" fetchPriority="high" width="100" height="100" decoding="async" data-nimg="1" 
                                className="w-full sm:h-16 h-8 transform transition duration-500 hover:scale-110"
                                src="/gmail.ico.svg"></img>
                            </a>
                            <p className="hidden sm:inline leading-relaxed mt-2">
                                <a href="mailto:sgm438@gmail.com" target="_blank">sgm438@gmail.com</a>
                            </p>
                        </div>
                        <div className="p-4 w-full sm:w-1/4">
                            <a href="mailto:sgm0209@naver.com" target="_blanck">
                                <img alt="Naver Logo" fetchPriority="high" width="100" height="100" decoding="async" data-nimg="1" 
                                className="w-full sm:h-16 h-8 transform transition duration-500 hover:scale-110"
                                src="/naver.ico.svg"></img>
                            </a>
                            <p className="hidden sm:inline leading-relaxed mt-2">
                                <a href="mailto:sgm0209@naver.com" target="_blank">sgm0209@naver.com</a>
                            </p>
                        </div>
                        <div className="p-4 w-full sm:w-1/4">
                            <a href="https://open.kakao.com/o/sdrmutxg" target="_blanck" className="items-center">
                                <img alt="Kakaotalk Logo" fetchPriority="high" width="100" height="100" decoding="async" data-nimg="1" 
                                className="w-full sm:h-16 h-8 transform transition duration-500 hover:scale-110"
                                src="/kakaotalk.ico.svg"></img>
                            </a>
                            <p className="hidden sm:inline leading-relaxed">
                                <a href="https://open.kakao.com/o/sdrmutxg" target="_blank">1:1 KakaoTalk Chat</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}