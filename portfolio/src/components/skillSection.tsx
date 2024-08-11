import "../css/skill.css"
const Skill = () => {
    return (
        <>
            <div id="skills" className="flex ml-14">
                <span className="font-extrabold text-4xl lg:text-7xl">Skills</span>
            </div>
            <div className="flex w-full h-auto ">
                
                <div className="timeline m-5 sm:m-20">
                    <div className="container rounded-md">
                        <div className="circle bg-white"></div>
                        <div className="box text-sm flex flex-col">
                            <span className="text-2xl font-extrabold">Front-End Technologies</span>
                            <div className="flex flex-wrap ml-auto">
                                <img className="w-12 h-12 p-1" src="logos/html.svg"></img>
                                <img className="w-12 h-12 p-1" src="logos/css.svg"></img>
                                <img className="w-12 h-12 p-1" src="logos/javascript.svg"></img>
                                <img className="w-12 h-12 p-1" src="logos/react.svg"></img>
                                <img className="w-12 h-12 p-1" src="logos/typescript.svg"></img>
                                <img className="w-12 h-12 p-1" src="logos/tailwindcss.svg"></img>
                            </div>
                        </div>
                    </div>
                    <div className="container rounded-md">
                        <div className="circle bg-white"></div>
                        <div className="box text-sm flex flex-col">
                            <span className="text-2xl font-extrabold">Back-End Technologies</span>
                            <div className="flex ml-auto">
                                <img className="w-12 h-12 p-1" src="logos/python.svg"></img>
                                <img className="w-12 h-12 p-1" src="logos/django.svg"></img>
                                <img className="w-12 h-12 p-1" src="logos/rest.svg"></img>
                            </div>
                        </div>
                    </div>
                    <div className="container rounded-md">
                        <div className="circle bg-white"></div>
                        <div className="box text-sm flex flex-col">
                            <span className="text-2xl font-extrabold">Development Technologies</span>
                            <div className="flex ml-auto">
                                <img className="w-12 h-12 p-1" src="logos/git.svg"></img>
                                <img className="w-12 h-12 p-1" src="logos/figma.svg"></img>
                                <img className="w-12 h-12 p-1" src="logos/vs.svg"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>

    )
}
export default Skill;