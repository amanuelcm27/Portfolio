import { useEffect, useState } from "react";
import About from "../components/aboutSection";
import Header from "../components/headerSection";
import Skill from "../components/skillSection";
import Navbar from "../components/navbar";
import Projects from "../components/projectSection";
import GroupedSection from "../components/groupedSection";
import Contact from "../components/contact";
import Footer from "../components/footer";



const Landing = () => {
    const [mode, setMode] = useState<boolean>(true); // mode true = Dark Mode

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        });
        const hiddenElements = document.querySelectorAll(".hid");
        hiddenElements.forEach((element) => observer.observe(element));
    }, [])
    return (
        <div className={`${mode? 'main-container':'main-container-light' }`}>  <Navbar mode={mode} setMode={setMode} />
            <Header mode={mode}/>
            <About mode={mode}/>
            <Skill mode={mode}/>
            <Projects mode={mode}/>
            <GroupedSection mode={mode}/>
            <Contact mode={mode}/>
            <Footer mode={mode}/>
        </div>
    )
}
export default Landing;