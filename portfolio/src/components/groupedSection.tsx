import "../css/group.css"
import { useRef, useState, useEffect } from "react";
const GroupedSection = () => {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const [choice, setChoice] = useState("hob")
    const [showCert, setShowCert] = useState(false);
    const handleImageSlide = (slideId: string) => {
        const targetElement = document.getElementById(slideId);
        if (targetElement && sliderRef.current) {
            const offsetPosition = targetElement.offsetLeft;
            sliderRef.current.scrollTo({
                left: offsetPosition,
                behavior: 'smooth',
            });
        }
    };
    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        document.body.style.overflow = showCert ? 'hidden'  : "auto";

        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setShowCert(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [modalRef,showCert]);
    return (

        <div className="flex flex-col min-w-full h-screen">
            <div className="flex flex-col w-9/10 h-full m-auto ">
                <div className="grid grid-cols-2 sm:grid-cols-4  sm:font-extrabold">
                    <div className=" text-center p-4 m-4 border-2 rounded-full hover:cursor-pointer reveal reveal-1" onClick={() => setChoice("edu")}><span>Education</span> </div>
                    <div className=" text-center p-4 m-4 border-2 rounded-full hover:cursor-pointer reveal reveal-2" onClick={() => setChoice("hob")}><span>Hobbies</span></div>
                    <div className=" text-center p-4 m-4 border-2 rounded-full hover:cursor-pointer reveal reveal-3 " onClick={() => setChoice("cert")}><span>Certification</span></div>
                    <div className=" text-center p-4 m-4 border-2 rounded-full hover:cursor-pointer reveal reveal-4" onClick={() => setChoice("blog")}><span>Blogs</span></div>
                </div>
                <div className="w-full h-full">
                    {choice === "edu" && <div className="flex flex-col sm:m-9 sm:p-4 text-md  sm:text-2xl ">
                        <span className="flex items-center reveal reveal-1"><i className="p-4 m-4 fa-solid fa-building-columns "></i> Addis Ababa Science and Technology University</span>
                        <span className="flex items-center reveal reveal-2"><i className="p-4 m-4  fa-solid fa-table-list"></i> Bachelor of Science in Software Engineering</span>
                        <span className="flex items-center reveal reveal-3"><i className="p-4 m-4 fa-solid fa-graduation-cap"></i> Expected Graduation 2026</span>
                        <span className="flex items-center reveal reveal-4"><i className="p-4 m-4 fa-solid fa-hashtag"></i> GPA: 3.8</span>
                    </div>}
                    {choice === "hob" && <div className="w-full rounded-lg relative">
                        <div className="slider-wrapper  mb-1 ">
                            <div className="slider  duration-300 ease-in  hover:shadow-custom-lg" ref={sliderRef}>
                                <img id="slide-1" src="am.jpg" alt="movies"></img>
                                <img id="slide-2" src="ocean.png" alt="my games"></img>
                                <img id="slide-3" src="am.jpg" alt="my books"></img>
                            </div>
                            <div className="slider-nav">
                                <a href="#slide-1" onClick={(e) => { e.preventDefault(); handleImageSlide('slide-1'); }}></a>
                                <a href="#slide-2" onClick={(e) => { e.preventDefault(); handleImageSlide('slide-2'); }}></a>
                                <a href="#slide-3" onClick={(e) => { e.preventDefault(); handleImageSlide('slide-3'); }}></a>
                            </div>
                        </div>
                    </div>}
                    {choice === "cert" && <div className="relative flex w-full h-full ">
                        {showCert &&
                            <div className="fixed w-full h-screen z-20 backdrop-blur-md top-0 left-0 flex flex-col justify-center gap-1 items-center">
                                <div className=" hover:cursor-pointer " onClick={() => setShowCert(false)}>
                                    <i className="p-2 text-md fa-solid fa-x"></i>
                                </div>
                                <div ref={modalRef} className="sm:w-8/10 sm:h-8/10 ">
                                    <img className="w-full h-full object-contain sm:object-fill rounded-md" src="cert.jpg"></img>
                                </div>
                            </div>}
                        <div className="w-9/10 h-full group">
                            {/* <div className="absolute w-9/10 h-500px inset-0 z-10 bg-black opacity-50 flex justify-center items-center hidden  group-hover:block hover:cursor-pointer ">

                            </div> */}
                            <div onClick={() => setShowCert(true)} className="cert-slide w-full h-full hover:cursor-pointer">
                                <img className="object-fill w-full h-8/10 sm:h-500px " src="cert.jpg"></img>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center w-1/10 h-8/10 sm:h-500px text-4xl  bg-white  backdrop-blur-lg text-black hover:bg-light hover:cursor-pointer ">
                            <i className=" fa-solid fa-angle-right"></i>
                        </div>
                    </div>}
                    {choice === "blog" && <div className=" flex bg-silver h-full flex-col justify-center items-center rounded-xl ">
                        <div className="bounce text-4xl sm:text-7xl font-extrabold">
                            <span >Coming Soon</span>
                        </div>
                    </div>}


                </div>
            </div>

        </div>)
}
export default GroupedSection;