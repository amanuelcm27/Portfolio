import "../css/group.css"
import { useRef, useState, useEffect } from "react";

interface groupedProps {
    mode: boolean
}
const GroupedSection: React.FC<groupedProps> = ({ mode }) => {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const [choice, setChoice] = useState("hob")
    const [showCert, setShowCert] = useState(false);
    const [img, setImg] = useState("cert1.png")
    const [index, setIndex] = useState(0);
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
    const fetchNewImage = () => {
        const images = ['cert1.png', 'cert2.png']
        const newIndex = (index + 1) % images.length;
        setIndex(newIndex);
        setImg(images[newIndex]);
    }

    const modalRef = useRef<HTMLDivElement | null>(null);
    const getButtonClass = (item: string) => {
        const isSelected = choice === item;
        const baseClasses = 'text-center p-4 m-4 border-2 rounded-full hover:cursor-pointer reveal';
        const borderColor = mode ? 'border-white' : 'border-black';
        const bgColor = isSelected ? (mode ? 'bg-white text-black' : 'bg-black text-white') : '';
        return `${baseClasses} ${borderColor} ${bgColor}`;
    };
    useEffect(() => {
        document.body.style.overflow = showCert ? 'hidden' : "auto";
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setShowCert(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [modalRef, showCert]);
    return (

        <div className="flex flex-col min-w-full h-screen hid">
            <div className="flex flex-col w-9/10 h-full m-auto ">
                <div className="grid grid-cols-2 sm:grid-cols-4  sm:font-extrabold">
                    <div className={getButtonClass('edu')} onClick={() => setChoice('edu')}>
                        <span>Education</span>
                    </div>
                    <div className={getButtonClass('hob')} onClick={() => setChoice('hob')}>
                        <span>Hobbies</span>
                    </div>
                    <div className={getButtonClass('blog')} onClick={() => setChoice('blog')}>
                        <span>Blogs</span>
                    </div>
                    <div className={getButtonClass('cert')} onClick={() => setChoice('cert')}>
                        <span>Certification</span>
                    </div>
                </div>
                <div className="w-full h-full">
                    {choice === "edu" && <div className="flex flex-col sm:m-9 sm:p-4 text-md  sm:text-2xl ">
                        <span className="flex items-center reveal reveal-1"><i className="p-4 m-4 fa-solid fa-building-columns "></i> Addis Ababa Science and Technology University</span>
                        <span className="flex items-center reveal reveal-2"><i className="p-4 m-4  fa-solid fa-table-list"></i> Bachelor of Science in Software Engineering</span>
                        <span className="flex items-center reveal reveal-3"><i className="p-4 m-4 fa-solid fa-graduation-cap"></i> Expected Graduation 2026</span>
                        <span className="flex items-center reveal reveal-4"><i className="p-4 m-4 fa-solid fa-hashtag"></i> GPA: 3.8</span>
                    </div>}
                    {choice === "hob" && <div className="w-full relative">
                        <div className="slider-wrapper  mb-1  ">
                            <div className="slider  duration-300 ease-in  " ref={sliderRef}>
                                <div id="slide-1" className="vid   relative">
                                    <div className=" absolute w-full h-full flex flex-col justify-center items-center  z-10 bg-black opacity-70 ">
                                        <div className="flex flex-col-reverse ">
                                            <span className="text-white sm:text-6xl sm:font-bold text-2xl">Games</span>
                                        </div>
                                    </div>
                                    <video className="w-full h-full object-cover" src="vids/games.mp4" loop muted autoPlay ></video>
                                </div>
                                <div id="slide-2" className="vid relative">
                                    <div className=" absolute w-full h-full flex flex-col justify-center items-center   z-10 bg-black opacity-70 ">
                                        <div className="flex flex-col-reverse ">
                                            <span className="text-white sm:text-6xl sm:font-bold text-2xl">Movies</span>
                                        </div>
                                    </div>
                                    <video  className="w-full h-full object-cover" src="vids/movies.mp4" loop muted autoPlay  ></video>
                                </div>
                                <div id="slide-3" className="vid relative">
                                    <div className=" absolute w-full h-full flex flex-col justify-center items-center   z-10 bg-black opacity-70 ">
                                        <div className="flex flex-col-reverse ">
                                            <span className="text-white sm:text-6xl sm:font-bold text-2xl">Non-Fiction Books</span>
                                        </div>
                                    </div>
                                    <video className="w-full h-full object-cover" src="vids/book.mp4" loop muted autoPlay ></video>
                                </div>
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

                                <div ref={modalRef} className={`sm:w-8/10 sm:h-8/10 scale`}>
                                    <img className="w-full h-full object-contain sm:object-fill rounded-md" src={img}></img>
                                </div>
                            </div>}
                        <div className="w-9/10 h-full group">

                            <div onClick={() => setShowCert(true)} className="cert-slide w-full h-full hover:cursor-pointer">
                                <img className="object-fill w-full h-8/10 sm:h-500px " src={img}></img>
                            </div>
                        </div>

                        <div onClick={fetchNewImage} className="flex flex-col justify-center items-center w-1/10 h-8/10 sm:h-500px text-4xl  bg-white   text-black hover:bg-light hover:cursor-pointer ">
                            <i className=" fa-solid fa-angle-right"></i>
                        </div>
                    </div>}
                    {choice === "blog" && <div className=" flex bg-silver h-full flex-col justify-center items-center rounded-xl ">
                        <div className={`bounce text-4xl sm:text-7xl font-extrabold ${!mode && 'text-white'}`}>
                            <span >Coming Soon</span>
                        </div>
                    </div>}


                </div>
            </div>

        </div>)
}
export default GroupedSection;