import { useState } from "react";
import Hamburger from "hamburger-react";

const Nav = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <header className="h-[18%] flex justify-between items-center  w-screen">
            <div className="z-[1000] w-full xl:[30%] h-[45%] md:w-[30%] xl:w-[30%] flex justify-center">
                <a className="m-0 p-0 pt-2 w-full xl:w-[60%] md:w-full sm:w-[60%] h-full" alt="Logo" href="/"><h1 className="text-4xl w-full font-outfit font-bold text-center hover:-translate-y-2 hover:text-green-700 cursor-pointer hover:rounded transition-all duration-500 ">Sports Club</h1></a>
            </div>
            <div className="block md:hidden w-[30px] z-[1000] h-[30px] absolute top-4 right-8">
                    <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
            </div>
            <div className={`${ isOpen === true ? 'opacity-100' : 'opacity-0' } pb-[4.3rem] items-center flex justify-center text-2xl font-space text-center leading-[100px] transition-all duration-500 w-screen h-screen absolute z-100 bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 top-0 right-0 `}>
                <ul className="transition-all duration-500">
                    <a href="something" alt="something"><li className="transtion-all duration-500 hover:-translate-y-3 hover:text-white">Home</li></a>
                    <a href="something" alt="something"><li className="transtion-all duration-500 hover:-translate-y-3 hover:text-white">Activites</li></a>
                    <a href="something" alt="something"><li className="transtion-all duration-500 hover:-translate-y-3 hover:text-white">Contact</li></a>
                    <a href="something" alt="something"><li className="transtion-all duration-500 hover:-translate-y-3 hover:text-white">About Us</li></a>
                </ul>
            </div>
            <div className="sm:hidden xsm:hidden md:flex lg:flex hidden w-[60%] items-center justify-center z-[10000] ">
                <ul className="sm:flex hidden md:w-full xl:w-[60%] w-[60%] justify-around h-full text-center text-xl md:text-md font-space font-semibold">
                    <li className="hover:-translate-y-2 transtion-all duration-500"><a className="hover:text-black transition-all duration-500 text-white hover:rounded bg-blue-600 hover:bg-transparent rounded-full px-4 py-2" href="/">Home</a></li>
                    <li className="hover:-translate-y-2 transtion-all duration-500"><a className="bg-green-700 hover:bg-transparent px-4 py-2 rounded-full text-white hover:text-black hover:border-b-green-700 transition-all duration-500 " href="something">Activities</a></li>
                    <li className="hover:-translate-y-2 transtion-all duration-500"><a className="bg-green-700 hover:bg-transparent px-4 py-2 rounded-full text-white hover:text-black hover:border-b-green-700 transition-all duration-500 " href="something">Contact</a></li>
                    <li className="hover:-translate-y-2 transtion-all duration-500"><a className="bg-green-700 hover:bg-transparent px-4 py-2 rounded-full text-white hover:text-black hover:border-b-green-700 transition-all duration-500 " href="something">About Us</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Nav