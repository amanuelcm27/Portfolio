import emailjs from '@emailjs/browser';
import { useState } from 'react';
interface contactProps {
    mode: boolean
}

const Contact: React.FC<contactProps> = ({ mode }) => {
    const public_key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    const template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const [success, setsuccess] = useState(false)
    const [error, setError] = useState('')
    const [showError, setShowError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        to_name: "amanuel firew",
        from_name: '',
        from_email: '',
        message: ''
    })
    const handleChange = (e:React.ChangeEvent<HTMLInputElement  | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const validateForm = () => {
        if (formData.from_email.trim() === '' || formData.message.trim() === '') {
            setShowError(true)
            setError("Email and Message must be filled")
            return false
        }
        return true
    }
    const sendEmail = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateForm()) {
            setLoading(true);
            emailjs.send(service_id, template_id, formData, public_key)
                .then((res) => {
                    setsuccess(true);
                    setFormData({
                        to_name: "amanuel firew",
                        from_name: '',
                        from_email: '',
                        message: ''
                    })
                    setLoading(false);
                    setShowError(false);
                    setError('')
                }
                ).catch(() => {
                    setShowError(true);
                    setError("Problem Sending Your Message")
                });
        }
    };
    return (
        <div id="contact" className="flex flex-col min-w-full hid relative">
            {success && <div className='absolute bottom-24 right-4  '>
                <div className='p-4  bg-green-500 text-white rounded-md slideimg '>
                    <i onClick={() => setsuccess(false)} className="fa-solid fa-check p-2  "></i>
                    <span>Message Succeffully sent</span>
                </div>
            </div>}
            <div className="sm:w-9/10 h-full sm:m-auto ">
                <div className="sm:flex sm:m-4 p-3">
                    <div className="sm:w-1/2 lg:w-1/3 p-2 sm:text-4xl uppercase font-extrabold">For Business Inquiries Contact Me</div>
                    <div className="ml-auto p-1"> <a href="/cv/amanuelfirewcv.pdf" download="amanuelfirewcv.pdf">
                        <button className="p-2 sm:p-5 bg-blue-500 hover:bg-blue-400 text-white rounded-md">Download Resume</button>
                    </a>
                    </div>
                </div>
                <div className="sm:m-4">
                    <form onSubmit={sendEmail} className="text-black flex flex-col md:w-9/10 xl:w-1/2">
                        {showError && <span className='text-white bg-red-500 sm:w-96 m-4 p-4 rounded-md'> <i className="fa-solid fa-circle-exclamation"></i> {error}</span>}
                        <input onChange={handleChange} value={formData.from_name} className={`sm:w-96 p-4 m-4 ${!mode && 'border-2 border-black'}`} name="from_name" type="text" placeholder="Your Name ..."></input>
                        <input onChange={handleChange} value={formData.from_email} className={`sm:w-96 p-4 m-4 ${!mode && 'border-2 border-black'}`} name="from_email" type="email" placeholder="Your Email ..."></input>
                        <textarea onChange={handleChange} value={formData.message} name='message' className={`h-40 p-4 m-4 outline-none ${!mode && 'border-2 border-black'} resize-none`} placeholder="Your Message ... "></textarea>
                        {loading ?
                            <div className={`m-4 p-2 flex justify-center ${mode ? 'bg-white hover:bg-light' : 'bg-black hover:bg-dark text-white'}`}>
                                <img className='w-4 h-4' src='loading.webp' alt='loading' />
                            </div> :
                            <button className={`m-4 p-2 ${mode ? 'bg-white hover:bg-light' : 'bg-black hover:bg-dark text-white'}`}>
                                Send Message
                            </button>
                        }
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