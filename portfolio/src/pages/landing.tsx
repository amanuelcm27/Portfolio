import { useState } from "react";
import About from "../components/aboutSection";
import Header from "../components/headerSection";
import Skill from "../components/skillSection";
import Navbar from "../components/navbar";
import Projects from "../components/projectSection";
import GroupedSection from "../components/groupedSection";
import Contact from "../components/contact";
import Footer from "../components/footer";



const Landing = () => {
    const [lightMode, setLightMode] = useState(false);
    return (
        <>  <Navbar/>
            <Header/>
            <About />
            <Skill />
            <Projects />
            <GroupedSection />
            <Contact />
            <Footer></Footer>
        </>
    )
}
export default Landing;