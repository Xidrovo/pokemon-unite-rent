import React, { useState } from "react";

const Sidebar = () => {
    const [show, setShow] = useState(true);

    const showHideSidebar = () => {
        setShow(!show);
    }

return (
        <section className={`absolute h-full mr-4 transition duration-200 ease-in-out transform ${show ? "w-1/12 translate-x-none": "-translate-x-full"}`}>
            <article className="flex flex-row h-full bg-blue-100">
                <ul className={`mx-4 pt-4 h-full flex flex-col`}>
                    <li className="font-medium border-b-2 border-pink-400 border-opacity-40 my-2">Home</li>
                    <li className="cursor-not-allowed hover:font-medium hover:text-red-400 py-2">Page 1</li>                    
                    <li className="mt-auto pb-2 cursor-pointer hover:font-medium">About us</li>
                </ul>
                <div className={`hover:bg-blue-200 bg-blue-100 h-full w-2 cursor-pointer ml-auto transform ${!show && "translate-x-2"}`} onClick={showHideSidebar}></div>
            </article>
        </section>
    )
}

export default Sidebar
