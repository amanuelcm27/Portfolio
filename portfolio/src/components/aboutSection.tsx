const About = () => {
    return (
        <div id="about" className="flex sm:flex-col justify-center min-w-full h-screen">

            <div className="flex h-fit sm:h-9/10 m-9">

                <div className="flex flex-col justify-center lg:p-10 font-extrabold text-4xl lg:text-7xl 2xl:text-9xl  w-full sm:w-1/2">
                    <span>About Me</span>
                    <div className="font-normal text-base md:text-md lg:text-lg 2xl:text-4xl text-justify pt-6 hyphens-auto leading-relaxed">
                        <span>
                            A motivated and proactive Software Engineering student with a GPA of
                            3.8, currently seeking opportunities to apply and enhance my skills in
                            web development and gain practical experience in a professional
                            setting. Personally, I have worked on projects for competitions and for
                            my personal skills development. I am aiming to learn from your
                            company howreal-world web-development works and other things that
                            would help me, and your company achieve our goals. 
                        </span>
                    </div>
                </div>

                <div className="hidden sm:flex flex-col justify-center items-center w-1/2 ">
                    <img className="2xl:w-4k 2xl:h-4k md:w-60 md:h-60 lg:w-96 lg:h-96  shadow-custom-lg rounded-full object-cover  hover:scale-110 transition-transform duration-300 " src="am.jpg"></img>
                </div>
            </div>

        </div>
    )
}
export default About;