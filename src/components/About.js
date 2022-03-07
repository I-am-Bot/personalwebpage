import React, {useEffect, useState} from "react"
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url"; 
import BlockContent from "@sanity/block-content-to-react";

export default function About() {
    const [me, setMe] = useState(null);
    const builder = imageUrlBuilder(sanityClient)

    function urlFor(source) {
      return builder.image(source)
    }

    useEffect(() => {
        sanityClient.fetch(`*[_type == "me"]{
            name,
            bio,
            "myImage": image.asset->url
        }`).then((data) => setMe(data[0]))
        .catch(console.error);
    },[]);

    if (!me) 
        return <div>Loading...</div>;
    
    return (
        <main className=" bg-gradient-to-r from-rose-50 to-red-50">
            <div className="p-10 w-3/5 lg:pt-48 min-h-screen container mx-auto relative">
                <section className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg flex shadow-2xl p-10">
                    <img src={urlFor(me.myImage).url()} className="rounded w-32 h-58 lg:h-55 mr-8" alt={me.name}/>
                        <div className="text-lg flex flex-col justify-center">
                            <h1 className="crusive text-6xl text-rose-50 mb-4">
                                Hey There! I'm {" "}
                                <span className="text-rosee-50">{me.name}</span>
                            </h1>
                            <div className= "prose lg:prose-xl text-rose-50">
                                <BlockContent blocks={me.bio} projectId = "985hlruw" dataset = "newdata"/>
                            </div>
                        </div>
                </section>
            </div>
        </main>
    )
}