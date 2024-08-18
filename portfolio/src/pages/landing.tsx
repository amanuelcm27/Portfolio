import { useEffect, useState } from "react";
import About from "../components/aboutSection";
import Header from "../components/headerSection";
import Skill from "../components/skillSection";
import Navbar from "../components/navbar";
import Projects from "../components/projectSection";
import GroupedSection from "../components/groupedSection";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Services from "../components/services";



const Landing = () => {
    const [mode, setMode] = useState<boolean>(true); // mode true = Dark Mode
    const [skillActive, setSkillActive] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    if (entry.target.classList.contains("skills")) {
                        setSkillActive(true);
                    }
                }           
            });
        });
        const hiddenElements = document.querySelectorAll(".hid");
        hiddenElements.forEach((element) => observer.observe(element));
    }, [])
    return (
        <div className={`${mode? 'main-container':'main-container-light' }`}>  <Navbar mode={mode} setMode={setMode} />
            <Header mode={mode}/>
            <About />
            <Skill skillActive={skillActive} mode={mode}/>
            <Projects mode={mode}/>
            <Services mode={mode} />
            <GroupedSection mode={mode}/>
            <Contact mode={mode}/>
            <Footer mode={mode}/>
        </div>
    )
}
export default Landing;