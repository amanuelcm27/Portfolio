import "../css/group.css"

interface serviceProps {
    mode: boolean
}
const Services: React.FC<serviceProps> = ({ mode }) => {

    return (

        <div id="service" className="flex flex-col min-w-full  hid ">
            <div className="flex flex-col lg:p-10  p-8 font-extrabold text-4xl lg:text-7xl 2k:text-9xl  w-full ">
                <span>My Services</span>
            </div>
            <div className="flex h-full justify-center flex-wrap  gap-5 m-2 sm:m-10 ">
                <div className={`flex lg:w-1/4 w-full  lg:h-96 ${mode ? 'hover:bg-white hover:text-black': 'hover:bg-black hover:text-white'} border-t-2 transition-all duration-300 ease-in hover:scale-105   `}>
                    <div className={`flex flex-col  p-5`}>
                        <span className="text-xl font-bold">Front-End Development</span>
                        <span className="text-xl pt-3  ">Creating responsive and interactive user interfaces using technologies like HTML, CSS, JavaScript, and frameworks like React </span>
                        <span className="mt-auto text-blue-500 transition-all duration-200 ease-in hover:translate-x-1 hover:cursor-pointer "><a href="#contact">Order Now</a> <i className="fa-solid fa-angle-right"></i> </span>
                    </div>
                </div>
                <div className={`flex lg:w-1/4 w-full lg:h-96 ${mode ? 'hover:bg-white hover:text-black': 'hover:bg-black hover:text-white'} border-t-2 transition-all duration-300 ease-in hover:scale-105   `}>
                    <div className={`flex flex-col  p-5`}>
                        <span className="text-xl font-bold">Back-End Development</span>
                        <span className="text-xl pt-3   ">
                            Build the server side infrastructure for your website to store and manage data using technologies like python and its framework Django
                        </span>
                        <span className="mt-auto text-blue-500 transition-all duration-200 ease-in hover:translate-x-1 hover:cursor-pointer "><a href="#contact">Order Now</a> <i className="fa-solid fa-angle-right"></i> </span>
                    </div>
                </div>
                <div className={`flex lg:w-1/4 w-full lg:h-96 ${mode ? 'hover:bg-white hover:text-black': 'hover:bg-black hover:text-white'} border-t-2 transition-all duration-300 ease-in hover:scale-105   `}>
                    <div className={`flex flex-col  p-5`}>
                        <span className="text-xl font-bold">Database Management</span>
                        <span className="text-xl pt-3  ">
                            Designing, implementing, and managing databases to store, retrieve, and manipulate data efficiently with databases like PostgreSQL </span>
                        <span className="mt-auto text-blue-500 transition-all duration-200 ease-in hover:translate-x-1 hover:cursor-pointer "><a href="#contact">Order Now</a> <i className="fa-solid fa-angle-right"></i> </span>
                    </div>
                </div>
                <div className={`flex lg:w-1/4 w-full lg:h-96 ${mode ? 'hover:bg-white hover:text-black': 'hover:bg-black hover:text-white'} border-t-2 transition-all duration-300 ease-in hover:scale-105   `}>
                    <div className={`flex flex-col  p-5`}>
                        <span className="text-xl font-bold">API Development and Integration</span>
                        <span className="text-xl pt-3  ">
                            Creating and integrating APIs that allow different applications to communicate with each other, using tools like RESTful API </span>
                        <span className="mt-auto text-blue-500 transition-all duration-200 ease-in hover:translate-x-1 hover:cursor-pointer "><a href="#contact">Order Now</a> <i className="fa-solid fa-angle-right"></i> </span>
                    </div>
                </div>
                <div className={`flex lg:w-1/4 w-full lg:h-96 ${mode ? 'hover:bg-white hover:text-black': 'hover:bg-black hover:text-white'} border-t-2 transition-all duration-300 ease-in hover:scale-105   `}>
                    <div className={`flex flex-col  p-5`}>
                        <span className="text-xl font-bold">DevOps and Deployment</span>
                        <span className="text-xl pt-3  ">
                            Managing the deployment, scaling, and monitoring of web applications. </span>
                        <span className="mt-auto text-blue-500 transition-all duration-200 ease-in hover:translate-x-1 hover:cursor-pointer "><a href="#contact">Order Now</a> <i className="fa-solid fa-angle-right"></i> </span>
                    </div>
                </div>
                <div className={`flex lg:w-1/4 w-full lg:h-96 ${mode ? 'hover:bg-white hover:text-black': 'hover:bg-black hover:text-white'} border-t-2 transition-all duration-300 ease-in hover:scale-105   `}>
                    <div className={`flex flex-col  p-5`}>
                        <span className="text-xl font-bold">UI/UX Design </span>
                        <span className="text-xl pt-3 ">
                            Design exceptional user interfaces for engaging user experience using tools like Figma
                        </span>
                        <span className="mt-auto text-blue-500 transition-all duration-200 ease-in hover:translate-x-1 hover:cursor-pointer "><a href="#contact">Order Now</a> <i className="fa-solid fa-angle-right"></i> </span>
                    </div>
                </div>
            </div>
        </div>)
}
export default Services;