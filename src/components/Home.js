import React from "react";
import image from "../WechatIMG26.jpeg"
import "@fontsource/amatic-sc"

export default function Home() {
    return(
        <main>
            <div class="flex">
                <div className="container mx-0 w-2/5 ml-0 mr-0 mt-0 mb-10 ">
                    <img src={image} alt="myphoto" ></img>
                </div>
                <div className="justify-center bg-gradient-to-r from-gray-800 to-gray-800  pt-12 ml-0 mr-1 mt-0 mb-10 lg: pt-50 w-3/5">
                    <span class="before:block before:absolute before:-inset-3 before:-skew-y-3 before:bg-amber-400 relative inline-block">
                    <span class="relative text-7xl text-bold">Hi! I'm Yaxin.</span>
                    </span>
                    <br></br>
                    <br></br>
                    <p><h2 className="text-lg text-red-200 gill ml-8 mr-8 leading-none lg:leading-snug">I'm a graduate student in Department of Computer Science and Engineering at  <a class="underline decoration-cyan-100/50">Michigan State University</a>. I'm grateful to join DSE Lab and study machine learning here under the supervision of <a class="underline decoration-cyan-100/50">Dr. Jiliang Tang</a>.</h2></p>
                    <br></br>
                    <p><h2 className="text-lg text-red-200 gill ml-8 mr-8 leading-none lg:leading-snug">Before came to MSU, I had completed my bachlor degree in Department of Automation at <a class="underline decoration-cyan-100/50">Tsinghua University</a>.</h2></p>
                    <br></br>
                    <p><h2 className="text-lg text-red-200 gill ml-8 mr-8 leading-none lg:leading-snug">Currently, I'm going to finish my master and I'm open to job market! My desire positions are <a class="underline decoration-cyan-100/50">Front-end SDE and Machine Learning Engineer</a>.</h2></p>
                    <br></br>
                    <p><h2 className="text-lg text-red-200 gill ml-8 mr-8 leading-none lg:leading-snug">Email: liyaxin1@msu.edu</h2></p>
                    <p><h2 className="text-lg text-red-200 gill ml-8 mr-8 leading-none lg:leading-snug">Phone: (+1) 5175056654</h2></p>

                </div>
            </div>
            
        </main>
    )
    
}
