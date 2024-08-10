const Contact = () => {
    return (
        <div className="flex flex-col min-w-full ">
            <div className="w-9/10 h-full m-auto ">
                <div className="flex m-4 p-3">
                    <div className="w-1/3 text-4xl uppercase font-extrabold">For Business Inquiries Contact Me</div>
                    <div className="ml-auto"> <a href="/cv/amanuelfirewcv.pdf" download="amanuelfirewcv.pdf">
                        <button className="p-5 bg-blue-500 hover:bg-blue-400 rounded-md">Download Resume</button>
                    </a>
                    </div>
                </div>
                <div className="m-4">
                    <form className="text-black flex flex-col w-1/2">
                        <input className="w-96 p-4 m-4 " type="text" placeholder="Your Name ..."></input>
                        <input className="w-96 p-4 m-4 " type="email" placeholder="Your Email ..."></input>
                        <textarea className="h-40 p-4 m-4 resize-none" placeholder="Your Message ... "></textarea>
                        <button className="m-4 p-2 bg-white ">Send Message</button>
                    </form>
                </div>
                <div className="flex m-4 ">
                    <div className="ml-auto flex items-center">
                        <span>Let's Connect</span>
                        <span className="text-xl ">
                            <a href="mailto:amanuelfirew27@gmail.com" target="_blank"><i className="p-3  fa-solid fa-envelope"></i></a>
                            <a href="https://github.com/amanuelcm27" target="_blank"><i className="p-3  fa-brands fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/amanuel-firew-lema/" target="_blank"><i className="p-3  fa-brands fa-linkedin"></i></a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;