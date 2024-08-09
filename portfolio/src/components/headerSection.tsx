import { useState } from "react"
import "../css/header.css"
const Header = () => {
    return (
        <div className="header flex flex-col  justify-center min-w-full h-screen">

            <div className="flex h-full bg-pic sm:bg-none sm:h-9/10 sm:m-9">

                <div className="header-txt flex flex-col uppercase bg-black bg-opacity-70 sm:bg-inherit sm:bg- justify-center p-10 font-extrabold text-4xl w-full  sm:w-1/2 md:text-6xl lg:text-7xl 2xl:text-9xl   ">
                    <span>Hi, I am</span>
                    <span>Amanuel Firew</span>
                    <span className="lowercase font-light text-sm 2xl:text-4xl ">i build full scale web application scaling businesses to success</span>

                </div>

                <div className="w-1/2 hidden sm:flex">
                    <img className="w-full mt-2 rounded-full  object-cover" src="person.png"></img>
                </div>
            </div>

        </div>
    )
}

export default Header;