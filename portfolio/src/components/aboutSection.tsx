import { useEffect, useState } from "react";
import '../css/about.css'
const About = () => {
    const images = ['p3.JPG', 'p4.JPG', 'p5.JPG', 'p1.JPG'];
    const [img, setImg] = useState(images[0]);
    const [index, setIndex] = useState(0);
    const [slideIn, setSlideIn] = useState(true);

    const fetchNewImage = () => {
        //  the next index
        const newIndex = (index + 1) % images.length;
        setIndex(newIndex);
        setSlideIn(false);
        setTimeout(() => {
            setImg(images[newIndex]);
            setSlideIn(true);
        }, 100);
    };

    useEffect(() => {
        const seconds = 3000; // 3 seconds
        const interval = setInterval(() => {
            fetchNewImage();
        }, seconds);

        return () => clearInterval(interval);
    }, [index]);

    return (
        <div id="about" className="flex sm:flex-col justify-center min-w-full h-screen hid">
            <div className="flex h-fit sm:h-9/10 m-9">
                <div className="flex flex-col  lg:p-10 font-extrabold text-4xl lg:text-7xl 2k:text-9xl w-full sm:w-1/2">
                    <span>About Me</span>
                    <div className="font-normal sm:text-justify text-base md:text-md lg:text-lg 2k:text-4xl pt-6 ">
                        <span>
                            My name is Amanuel Firew Lema, a dedicated software engineer from Ethiopia with a specialization in website development.
                            I create full-scale websites, handling both front-end and back-end functionalities. Utilizing modern software development technologies,
                            I focus on building functional, scalable, and user-friendly websites.
                            My mission is to empower small to large businesses by developing tools that help their customers achieve their goals and scale their business to success.
                            Scale your business now !
                        </span>
                    </div>
                    <div>
                        <a href="#contact">
                            <button className=" text-2xl bg-blue-400 text-white p-2 sm:p-4 hover:bg-blue-300 "> Let's Begin </button>
                        </a>
                    </div>

                </div>

                <div className="hidden sm:flex flex-col justify-center items-center w-1/2">
                    <img
                        className={`2k:w-4k 2k:h-4k md:w-60 md:h-60 lg:w-96 lg:h-96 shadow-sm hover:shadow-custom-lg rounded-full object-cover hover:scale-110 transition-all duration-500 ${slideIn ? 'slide-in' : 'slide-out'}`}
                        src={img}
                        alt="Profile"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
