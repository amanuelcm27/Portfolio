const Footer = () => {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric' };
    const formattedDate = currentDate.toLocaleString('en-US', options);
    return (
        <div className="w-full h-6 text-center bg-white text-black shadow-md">
            <span>
                &#64;copyright {formattedDate} <span className="hidden sm:inline">Amanuel Firew Lema</span>
            </span>
        </div>
    )
}
export default Footer;