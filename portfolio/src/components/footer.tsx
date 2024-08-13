interface footerProps {
    mode: boolean
}
const Footer:React.FC<footerProps> = ({mode}) => {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric' };
    const formattedDate = currentDate.toLocaleString('en-US', options);
    return (
        <div className={`w-full h-10 flex flex-col justify-center text-center ${mode ? 'bg-white text-black' : 'bg-black text-white'}  shadow-md`}>
            <span>
                &#64;copyright {formattedDate} <span className="hidden sm:inline">Amanuel Firew Lema</span>
            </span>
        </div>
    )
}
export default Footer;