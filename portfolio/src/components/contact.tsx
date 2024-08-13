
interface  contactProps  {
    mode:boolean
}
const Contact:React.FC<contactProps> = ({mode}) => {
    return (
        <div id="contact" className="flex flex-col min-w-full hid">
            <div className="sm:w-9/10 h-full sm:m-auto ">
                <div className="sm:flex sm:m-4 p-3">
                    <div className="sm:w-1/2 lg:w-1/3 p-2 sm:text-4xl uppercase font-extrabold">For Business Inquiries Contact Me</div>
                    <div className="ml-auto p-1"> <a href="/cv/amanuelfirewcv.pdf" download="amanuelfirewcv.pdf">
                        <button className="p-2 sm:p-5 bg-blue-500 hover:bg-blue-400 text-white rounded-md">Download Resume</button>
                    </a>
                    </div>
                </div>
                <div className="sm:m-4">
                    <form className="text-black flex flex-col md:w-9/10 xl:w-1/2">
                        <input className={`sm:w-96 p-4 m-4 ${!mode && 'border-2 border-black' }`} type="text" placeholder="Your Name ..."></input>
                        <input className={`sm:w-96 p-4 m-4 ${!mode && 'border-2 border-black' }`} type="email" placeholder="Your Email ..."></input>
                        <textarea className={`h-40 p-4 m-4 outline-none ${!mode && 'border-2 border-black' } resize-none`} placeholder="Your Message ... "></textarea>
                        <button className={`m-4 p-2   ${mode ? 'bg-white hover:bg-light': 'bg-black hover:bg-dark text-white'}`}>Send Message</button>
                    </form>
                </div>
                <div className="flex justify-center m-2 sm:m-4 ">
                    <div className="sm:ml-auto flex items-center">
                        <span>Let's Connect</span>
                        <span className="text-xl ">
                            <a href="mailto:amanuelfirew27@gmail.com" target="_blank" title="my email"><i className="p-2  fa-solid fa-envelope transition-transform duration-300 ease-in-out  transform hover:-rotate-12 hover:scale-105 "></i></a>
                            <a href="https://github.com/amanuelcm27" target="_blank" title="my github"><i className="p-2  fa-brands fa-github transition-transform duration-300 ease-in-out  transform hover:-rotate-12 hover:scale-105 "></i></a>
                            <a href="https://www.linkedin.com/in/amanuel-firew-lema/" title="my linkedin" target="_blank"><i className="p-2  fa-brands fa-linkedin transition-transform duration-300 ease-in-out  transform hover:-rotate-12 hover:scale-105 "></i></a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;