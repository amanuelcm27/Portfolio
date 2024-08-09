import { useState } from "react";
import About from "../components/aboutSection";
import Header from "../components/headerSection";
import Skill from "../components/skillSection";



const Landing = () => {
    const [lightMode, setLightMode] = useState(false);
    return (
        <>
            <Header/>
            <About />
            <Skill />
        </>
    )
}
export default Landing;