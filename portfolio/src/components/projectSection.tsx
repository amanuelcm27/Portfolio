import { useEffect, useState } from "react"
import "../css/projects.css"
interface projectsProps {
    mode: boolean
}
const Projects: React.FC<projectsProps> = ({ mode }) => {
    const projects = [
        {
            "name": 'Gulit', "description":
                'Guilt is an ecommerce website where you can buy and sell products , add products to your cart and checkout with your products. It has a user friendly interface and a secure payment gateway with modern payment system like Chapa integrated.',
            'vid': "vids/gulit.mp4", 'url': 'https://gulitco.vercel.app'
        },
        {
            "name": 'Finese', "description":
                'A Finanical tracking website where you can add your daily expense ,set saving goals , track your progress and filter your expenses based on monthly or yearly and track your achivements and  get suggestions based on your monthly expenses to meet your goals',
            'vid': "vids/finese.mp4", 'url': 'https://finese.vercel.app'
        }, {
            "name": 'CampusSync', "description":
                'An Event Sharing Platform where unviersity communities can share upcoming events , RSVP for events and have discussion on events to get timely information  ',
            'vid': "vids/campus.mp4", 'url': 'https://campussync.vercel.app'
        }, {
            "name": 'Journey', "description":
                'A personal game collection website where users can store games they have played, store games they wish to play in the future and add there opinions on each game they play. It is gallery for your memories ',
            'vid': "vids/journey.mp4", 'url': 'https://journeysofaman.vercel.app'
        },]
    const [project, setProject] = useState(projects[0])
    const [index, setIndex] = useState(0)
    const fetchNewProject = (type: string) => {
        const newIndex = type === 'next' ? (index + 1) % projects.length : ((index == 0 ? projects.length : index) - 1) % projects.length
        setIndex(newIndex);
        setProject(projects[newIndex]);
    }
    useEffect(() => {

    }, [project])
    return (
        <div id="projects" className="flex flex-col min-w-full  h-auto hid">
            <div className="flex flex-col sm:h-9/10 m-9">
                <div className="flex flex-col lg:p-10 font-extrabold text-4xl lg:text-7xl 2k:text-9xl  w-full ">
                    <span>Projects</span>
                </div>
                <div className={`w-full sm:h-500px mt-5 sm:m-3 sm:flex ${mode ? 'bg-white text-black' : 'bg-black text-white'} rounded-lg p-4`}>
                    <div className="sm:flex flex-col w-1/2 m-3" key={project.name} >
                        <span className="md:p-4 font-extrabold text-2xl lg:text-4xl 2k:text-9xl slidein" >{project.name}</span>
                        <span className="hidden sm:block p-5  font-normal text-base md:text-md lg:text-lg 2k:text-4xl text-justify  hyphens-auto leading-relaxed overflow-y-auto">
                            <span className="reveal reveal-1">
                                {project.description}
                            </span>
                        </span>
                        <div className="p-5 mt-auto hidden sm:block">
                            <button onClick={() => fetchNewProject('prev')} className="p-4 border-2 border-r-0 project-btn">
                                <i className="fa-solid fa-angle-left"></i>
                            </button>
                            <button onClick={() => fetchNewProject('next')} className="project-btn p-4 border-2 "><i className="fa-solid fa-angle-right"></i></button>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 sm:h-full flex flex-col justify-center  relative group slideimg" key={project.vid}>
                        <div className="absolute w-full h-1/2 sm:w-full sm:h-full rounded-lg z-10 bg-black 
                        opacity-0 sm:group-hover:opacity-80 transition-opacity duration-300 delay-75
                         hover:cursor-pointer ">
                            <div className="flex w-full h-full justify-center items-center ">
                                <button className="p-2 sm:p-5 bg-blue-500 hover:bg-blue-400  text-white rounded-md"><a target="_blank" href={project.url} className="font-bold">Live View</a></button>
                            </div>
                        </div>
                        <a href={project.url} className=" block ">
                            <video src={project.vid} autoPlay muted loop className="w-full sm:h-full" ></video>
                        </a>
                    </div>
                    <div className="p-2 sm:hidden">
                        <button onClick={() => fetchNewProject('prev')} className="p-2 border-2  border-r-0 project-btn">
                            <i className="fa-solid fa-angle-left"></i>
                        </button>
                        <button onClick={() => fetchNewProject('next')} className="project-btn p-2 border-2  " ><i className="fa-solid fa-angle-right"></i></button>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Projects;