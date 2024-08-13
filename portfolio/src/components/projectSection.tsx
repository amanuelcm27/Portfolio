import "../css/projects.css"
interface projectsProps {
    mode: boolean
}
const Projects:React.FC<projectsProps> = ({mode}) => {

    return (
        <div id="projects" className="flex flex-col min-w-full  h-auto hid">
            <div className="flex flex-col sm:h-9/10 m-9">
                <div className="flex flex-col lg:p-10 font-extrabold text-4xl lg:text-7xl 2xl:text-9xl  w-full ">
                    <span>Projects</span>
                </div>
                <div className={`w-full sm:h-500px mt-5 sm:m-3 sm:flex ${mode ? ' bg-white text-black' :'bg-black text-white'} rounded-lg p-4`}>
                    <div className="sm:flex flex-col w-1/2 m-3">
                        <span className="md:p-4 font-extrabold text-2xl lg:text-4xl 2xl:text-9xl slidein" >Finese</span>
                        <span className="hidden sm:block p-5  font-normal text-base md:text-md lg:text-lg 2xl:text-4xl text-justify  hyphens-auto leading-relaxed overflow-y-auto">
                            <span className="reveal reveal-1"> A motivated and proactive Software Engineering student with a GPA of
                                3.8, currently seeking opportunities to apply and enhance my skills in
                                web development</span> <span className="reveal reveal-2">and gain practical experience in a professional
                                    setting. Personally, I have worked on projects for competitions and for
                                    my personal skills development.</span > <span className="reveal reveal-3"> I am aiming to learn from your
                                        company howreal-world web-development works and other things that
                                        would help me, and your company achieve our goals.</span>

                        </span>
                        <div className="p-5 hidden sm:block">
                            <button className="p-4 border-2 border-r-0 project-btn">
                                <i className="fa-solid fa-angle-left"></i>
                            </button>
                            <button className="project-btn p-4 border-2 "><i className="fa-solid fa-angle-right"></i></button>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 sm:h-full flex flex-col justify-center  relative group slideimg">
                        <div className="absolute w-full h-1/2 sm:w-full sm:h-full rounded-lg z-10 bg-black 
                        opacity-0 sm:group-hover:opacity-80 transition-opacity duration-300 delay-75
                         hover:cursor-pointer ">
                            <div className="flex w-full h-full justify-center items-center ">
                                <button className="p-2 sm:p-5 bg-blue-500 hover:bg-blue-400  text-white rounded-md"><a target="_blank" href="https://journeysofaman.vercel.app" className="font-bold">Live View</a></button>
                            </div>
                        </div>
                        <a href="https://journeysofaman.vercel.app">
                            <img src="test.gif" className="w-full h-full" ></img>
                        </a>
                    </div>
                    <div className="p-2 sm:hidden">
                        <button className="p-2 border-2  border-r-0 project-btn">
                            <i className="fa-solid fa-angle-left"></i>
                        </button>
                        <button className="project-btn p-2 border-2  "><i className="fa-solid fa-angle-right"></i></button>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Projects;