import "../css/skill.css";

interface SkillSectionProps {
  title: string;
  technologies: { src: string; alt: string }[];
  mode: boolean;
}

const SkillSection: React.FC<SkillSectionProps> = ({ title, technologies, mode }) => (
  <div className="container rounded-md">
    <div className={`circle ${mode ? 'bg-white' : 'bg-black'}`}></div>
    <div className="box text-sm flex flex-col">
      <span className="text-2xl font-extrabold">{title}</span>
      <div className="flex flex-wrap ml-auto">
        {technologies.map((tech) => (
          <img key={tech.src} loading="lazy" decoding="async" className="w-12 h-12 p-1" src={tech.src} alt={tech.alt}></img>
        ))}
      </div>
    </div>
  </div>
);

interface SkillProps {
  mode: boolean;
  skillActive: boolean;
}

const Skill: React.FC<SkillProps> = ({ mode, skillActive }) => {
  const frontEndTechs = [
    { src: "logos/html.svg", alt: "HTML" },
    { src: "logos/css.svg", alt: "CSS" },
    { src: "logos/javascript.svg", alt: "JavaScript" },
    { src: "logos/react.svg", alt: "React" },
    { src: "logos/typescript.svg", alt: "TypeScript" },
    { src: "logos/tailwindcss.svg", alt: "Tailwind CSS" },
  ];

  const backEndTechs = [
    { src: "logos/python.svg", alt: "Python" },
    { src: "logos/django.svg", alt: "Django" },
    { src: "logos/rest.svg", alt: "REST API" },
  ];

  const developmentTechs = [
    { src: "logos/git.svg", alt: "Git" },
    { src: "logos/figma.svg", alt: "Figma" },
    { src: "logos/vs.svg", alt: "Visual Studio Code" },
  ];

  return (
    <>
      <div id="skills" className="flex ml-14 hid">
        <span className="font-extrabold text-4xl lg:text-7xl">Skills</span>
      </div>
      <div className="skills flex w-full h-auto hid">
        {skillActive && (
          <div className={`timeline ${mode ? "light" : "dark"} m-5 sm:m-20`}>
            <SkillSection title="Front-End Technologies" technologies={frontEndTechs} mode={mode} />
            <SkillSection title="Back-End Technologies" technologies={backEndTechs} mode={mode} />
            <SkillSection title="Development Technologies" technologies={developmentTechs} mode={mode} />
          </div>
        )}
      </div>
    </>
  );
};

export default Skill;
