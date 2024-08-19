import "../css/skill.css"
interface skillProps {
    mode: boolean,
    skillActive: boolean
}
const Skill: React.FC<skillProps> = ({ mode, skillActive }) => {

    return (
        <>
            <div id="skills"  className="flex ml-14 hid">
                <span className="font-extrabold text-4xl lg:text-7xl">Skills</span>
            </div>
            <div className="skills flex w-full h-auto hid ">
                {skillActive && <div className={`timeline ${mode ? "light" : "dark"} m-5 sm:m-20`}>
                    <div className="container rounded-md">
                        <div className={`circle ${mode ? 'bg-white' : 'bg-black'}`}></div>
                        <div className="box text-sm flex flex-col">
                            <span className="text-2xl font-extrabold">Front-End Technologies</span>
                            <div className="flex flex-wrap ml-auto">
                                <img loading='lazy' decoding="async" className="w-12 h-12 p-1" src="logos/html.svg"></img>
                                <img loading='lazy' decoding="async" className="w-12 h-12 p-1" src="logos/css.svg"></img>
                                <img loading='lazy' decoding="async" className="w-12 h-12 p-1" src="logos/javascript.svg"></img>
                                <img loading='lazy' decoding="async" className="w-12 h-12 p-1" src="logos/react.svg"></img>
                                <img loading='lazy' decoding="async" className="w-12 h-12 p-1" src="logos/typescript.svg"></img>
                                <img loading='lazy' decoding="async" className="w-12 h-12 p-1" src="logos/tailwindcss.svg"></img>
                            </div>
                        </div>
                    </div>
                    <div className="container rounded-md">
                        <div className={`circle ${mode ? 'bg-white' : 'bg-black'}`}></div>

                        <div className="box text-sm flex flex-col">
                            <span className="text-2xl font-extrabold">Back-End Technologies</span>
                            <div className="flex ml-auto">
                                <img loading='lazy' decoding="async" className="w-12 h-12 p-1" src="logos/python.svg"></img>
                                <img loading='lazy' decoding="async" className="w-12 h-12 p-1" src="logos/django.svg"></img>
                                <img loading='lazy' decoding="async" className="w-12 h-12 p-1" src="logos/rest.svg"></img>
                            </div>
                        </div>
                    </div>
                    <div className="container rounded-md">
                        <div className={`circle ${mode ? 'bg-white' : 'bg-black'}`}></div>

                        <div className="box text-sm flex flex-col">
                            <span className="text-2xl font-extrabold">Development Technologies</span>
                            <div className="flex ml-auto">
                                <img loading='lazy' decoding="async" className="w-12 h-12 p-1" src="logos/git.svg"></img>
                                <img loading='lazy' decoding="async" className="w-12 h-12 p-1" src="logos/figma.svg"></img>
                                <img loading='lazy' decoding="async" className="w-12 h-12 p-1" src="logos/vs.svg"></img>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </>

    )
}
export default Skill;