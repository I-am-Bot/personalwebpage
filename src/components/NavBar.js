import React from "react"
import {NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons";

export default function NavBar() {
    return (
        <header class="bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="container mx-auto flex justify-between">
                <nav class="flex">
                    <NavLink to="/" exact
                    activeClassName="text-white"
                    className="inflex-flex items-center py-4 px-3 mr-4 text-red-100 crusive font-bold hover:text-yellow-300 text-4xl font-bold cursive tracking-widest">
                        Yaxin Li
                    </NavLink>
                    <NavLink to="/project" 
                    className="inflex-flex items-center py-1 px-3 my-6 text-lg rounded text-red-200 font-bold hover:text-yellow-300"
                    activeClassName="text-red-100 bg-red-700">
                        Projects
                    </NavLink>

                    <NavLink to="/post" 
                    className="inflex-flex items-center py-1 px-3 my-6 text-lg rounded text-red-200 font-bold hover:text-yellow-300"
                    activeClassName="text-red-100 bg-red-700">
                        Library
                    </NavLink>
                    <NavLink to="/about" 
                    className="inflex-flex items-center py-1 px-3 my-6 text-lg rounded text-red-200 font-bold hover:text-yellow-300"
                    activeClassName="text-red-100 bg-red-700">
                        About me!
                    </NavLink>
                </nav>
                <div className="inline-flex px-3 py-1 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/i-am-bot/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                    <SocialIcon url="https://github.com/I-am-Bot" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                    <SocialIcon url="https://www.instagram.com/liyaxin0.0/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                </div>
            </div>
            
        </header>
    )
}