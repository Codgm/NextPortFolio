import Layout from "../components/layout";

export default function Skills() {
    return (
        <Layout>
            <div className="container lg:w-4/5 px-5 py-6 mx-auto">
                <div className="flex items-center mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                    <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 grid items-center justify-center rounded-full flex-shrink-0">
                        <img alt="Next.js" className="sm:w-28 w-24 sm:h-8 h-6" src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js"></img>
                        <img alt="HTML5" className="sm:w-28 w-24 sm:h-8 h-6" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"></img>
                        <img alt="CSS3" className="sm:w-28 w-24 sm:h-8 h-6" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"></img>
                    </div>
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h3 className="text-lg title-font font-medium mb-2 dark:text-pink-600">Next.js, HTML5, CSS3</h3>
                        <ul className="pl-4 leading-relaxed text-base list-disc text-left">
                            <li>
                                I have configured the current site using Next.js and Tailwind CSS.
                            </li>
                            <li>
                                I created this web server through Next.js.
                            </li>
                            <li>    
                                I can create web pages by dealing with HTML and CSS.
                            </li>
                            <li>
                                The design using Figma has adapted by performing the technical tasks of several companies.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h3 className="text-lg title-font font-medium mb-2 dark:text-pink-600">Tailwind CSS, JavaScript, TypeScript</h3>
                        <ul className="pl-4 leading-relaxed text-base list-disc text-left">
                            <li>
                                I have configured the current site using Next.js and Tailwind CSS.
                            </li>
                            <li>
                                I am good at JavaScript and I also used javascript on the current site.
                            </li>
                            <li>
                                I've used TypeScript a lot, but I'm still a little bit immature.
                            </li>
                        </ul>
                    </div>
                    <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 grid items-center justify-center rounded-full flex-shrink-0">
                        <img alt="Tailwind CSS" className="sm:w-28 w-24 sm:h-8 h-6" src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"></img>
                        <img alt="JavaScript" className="sm:w-28 w-24 sm:h-8 h-6" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"></img>
                        <img alt="TypeScript" className="sm:w-28 w-24 sm:h-8 h-6" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"></img>
                    </div>
                </div>
                <div className="flex items-center mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                    <div className="sm:w-32 sm:h-24 h-20 w-20 sm:mr-10 grid items-center justify-center rounded-full flex-shrink-0">
                        <img alt="Git" className="sm:w-28 w-24 sm:h-8 h-6" src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"></img>
                        <img alt="Visual Studio Code" className="sm:w-28 w-24 sm:h-8 h-6" src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"></img>
                    </div>
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h3 className="text-lg title-font font-medium mb-2 dark:text-pink-600">Git, Visual Studio Code</h3>
                        <ul className="pl-4 leading-relaxed text-base list-disc text-left">
                            <li>
                                Familiar with source fetch, pull, and branch operations with Git.
                            </li>
                            <li>
                                I have recently adapted to the Pull Request ecosystem by carrying out technical tasks.
                            </li>
                            <li>    
                                I usually use a feature branch when I make a pull request
                            </li>
                            <li>
                                VSCode is mainly used for front-end development, but it is also used for other things such as back-end.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
