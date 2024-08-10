const Footer = () => {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = {year: 'numeric' };
    const formattedDate = currentDate.toLocaleString('en-US', options);
    return (
        <div className="w-full h-6 text-center bg-white text-black">
           &#64;copyright {formattedDate} Amanuel Firew Lema
        </div>
    )
}
export default Footer;