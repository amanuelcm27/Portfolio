
import "../css/projects.css"
const Projects = () => {

    return (
        <div id="projects" className="flex flex-col min-w-full  h-auto">
            <div className="flex flex-col sm:h-9/10 m-9">
                <div className="flex flex-col lg:p-10 font-extrabold text-4xl lg:text-7xl 2xl:text-9xl  w-full ">
                    <span>Projects</span>
                </div>
                <div className="w-full h-9/10 mt-5 sm:m-3 sm:flex bg-white text-black rounded-lg p-4">
                    <div className="sm:flex flex-col w-1/2 ">

                        <span className="p-4 lg:p-10 font-extrabold text-2xl lg:text-4xl 2xl:text-9xl " >Finese</span>
                        <span className="hidden sm:block p-5  font-normal text-base md:text-md lg:text-lg 2xl:text-4xl text-justify  hyphens-auto leading-relaxed">
                            <span className="reveal reveal-1"> A motivated and proactive Software Engineering student with a GPA of
                                3.8, currently seeking opportunities to apply and enhance my skills in
                                web development</span> <span className="reveal reveal-2">and gain practical experience in a professional
                                    setting. Personally, I have worked on projects for competitions and for
                                    my personal skills development.</span > <span className="reveal reveal-3"> I am aiming to learn from your
                                        company howreal-world web-development works and other things that
                                        would help me, and your company achieve our goals.</span>
                        </span>
                        <div className="p-5 hidden sm:block">
                            <button className="p-4 border-2 border-blue-100 border-r-0 project-btn">
                                <i className="fa-solid fa-angle-left"></i>
                            </button>
                            <button className="project-btn p-4 border-2 border-blue-100 "><i className="fa-solid fa-angle-right"></i></button>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 flex flex-col justify-center">

                        <img src="test.gif" className="w-full h-1/2 sm:w-9/10 sm:h-6/10"></img>
                    </div>
                    <div className="p-2 sm:hidden">
                        <button className="p-2 border-2 border-blue-100 border-r-0 project-btn">
                            <i className="fa-solid fa-angle-left"></i>
                        </button>
                        <button className="project-btn p-2 border-2 border-blue-100 "><i className="fa-solid fa-angle-right"></i></button>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Projects;