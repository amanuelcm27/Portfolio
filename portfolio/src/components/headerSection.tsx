import { useEffect, useState } from "react";
import "../css/header.css";

interface HeaderProps {
    mode: boolean;
}

const Header: React.FC<HeaderProps> = ({ mode }) => {
    const texts = ['amanuel firew', 'a FrontEnd Developer', 'a BackEnd Developer' , 'a Casual Gamer'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [letterIndex, setLetterIndex] = useState(0);
    const typingSpeed = 105; // speach at which each letter is written
    const delayBetweenWords = 3000; // Delay between words

    useEffect(() => {
        const currentWord = texts[currentWordIndex];
        let interval: number;

        if (letterIndex <= currentWord.length) {
            // Typing effect
            interval = setInterval(() => {
                setCurrentText(currentWord.substring(0, letterIndex + 1));
                setLetterIndex(prevIndex => prevIndex + 1);
            }, typingSpeed);
        } else {
            // Delay before starting the next word
            setTimeout(() => {
                setLetterIndex(0);
                setCurrentText(currentWord[letterIndex]);
                setCurrentWordIndex(prevIndex => (prevIndex + 1) % texts.length);
            }, delayBetweenWords);
        }

        return () => clearInterval(interval);
    }, [letterIndex, currentWordIndex]);

    return (
        <div id="home" className="header flex flex-col justify-center min-w-full h-screen hid">
            <div className="flex h-full bg-pic sm:bg-none sm:h-9/10 sm:m-9">
                <div className={`header-txt flex flex-col uppercase bg-black ${!mode && 'text-white sm:text-inherit'} bg-opacity-70 sm:bg-inherit  justify-center p-10 font-extrabold text-4xl w-full sm:w-1/2 md:text-6xl lg:text-6xl 2k:text-9xl`}>
                    <span>Hi, I am</span>
                    <span> {currentText} <span className="blink">|</span></span>
                    <span className="lowercase font-light text-sm 2k:text-4xl">i build full scale web application scaling businesses to success</span>
                </div>
                <div className="w-1/2 hidden sm:flex">
                    <img className="w-full mt-2 rounded-full object-cover" src="person.png" alt="Person" />
                </div>
            </div>
        </div>
    );
};

export default Header;
