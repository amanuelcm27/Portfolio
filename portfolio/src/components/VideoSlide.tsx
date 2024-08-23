interface vidSlideProps  {
    id:string;
    src:string;
    label:string;
}

const VideoSlide: React.FC<vidSlideProps> = ({ id, src, label }) => {
    return (
        <div id={id} className="vid relative">
            <div className="absolute w-full h-full flex flex-col justify-center items-center z-10 bg-black opacity-70">
                <div className="flex flex-col-reverse">
                    <span className="text-white sm:text-6xl sm:font-bold text-2xl">{label}</span>
                </div>
            </div>
            <video className="w-full h-full object-cover" src={src} loop muted autoPlay></video>
        </div>
    );
}
export default VideoSlide;