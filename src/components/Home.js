import React from "react";
import image from "../WechatIMG26.jpeg"
import pdf from "../Yaxin_CV_2022_SDE.pdf"
import "@fontsource/amatic-sc"

export default function Home() {
    return(
        <main>
            <div class="flex">
                <div className="container mx-0 w-2/5 ml-0 mr-0 mt-0 mb-10 ">
                    <img src={image} alt="myphoto" ></img>
                </div>
                <div className="justify-center bg-gradient-to-r from-gray-800 to-gray-800  pt-12 ml-0 mr-1 mt-0 mb-10 lg: pt-50 w-3/5">
                    <span class="before:block before:absolute before:-inset-4 before:-skew-y-1  before:bg-gradient-to-r from-gray-900 to-gray-800 relative inline-block mb-8">
                    <span class="relative text-7xl text-sky-50 text-bold">Hi! I'm Yaxin.</span>
                    </span>
                    <br></br>
                    <br></br>
                    <p><h2 className="text-xl text-sky-50 gill ml-8 mr-8 leading-none lg:leading-snug lg:text-1xl">I'm a graduate student in Department of Computer Science and Engineering at  <a class="underline decoration-cyan-100/50">Michigan State University</a>. I'm grateful to join DSE Lab and study machine learning here under the supervision of <a class="underline decoration-cyan-100/50">Dr. Jiliang Tang</a>.</h2></p>
                    <br></br>
                    <p><h2 className="text-xl text-sky-50 gill ml-8 mr-8 leading-none lg:leading-snug lg:text-1xl">Before came to MSU, I had completed my bachlor degree in Department of Automation at <a class="underline decoration-cyan-100/50">Tsinghua University</a>.</h2></p>
                    <br></br>
                    <p><h2 className="text-xl text-sky-50 gill ml-8 mr-8 leading-none lg:leading-snug lg:text-1xl">Currently, I'm going to finish my master and I'm open to job market! My desire positions are <a class="underline decoration-cyan-100/50">Front-end SDE and Machine Learning Engineer</a>.</h2></p>
                    <br></br>
                    <p><h2 className="text-xl text-sky-50 gill ml-8 mr-8 leading-none lg:leading-snug lg:text-1xl">Email: liyaxin1@msu.edu</h2></p>
                    <p><h2 className="text-xl text-sky-50 gill ml-8 mr-8 leading-none lg:leading-snug lg:text-1xl">Phone: (+1) 5175056654</h2></p>
                    <br></br>
                    <a href = {pdf} download = "yaxinli.pdf" target="_blank" rel="noreferrer">
                    <button class="rounded-lg bg-sky-700 mx-10 px-8 py-2 shadow-md shadow-gray-900 text-bold text-2xl text-sky-50" activeClassName="bg-gray-800">📂 My resume</button>
                    </a>
                </div>

            </div>
            
        </main>
    )
    
}
