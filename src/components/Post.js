import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom"
import sanityClient from "../client.js";

export default function Post() {
    const [PostData, setPost] = useState(null);

    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "post"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id, 
                    url
                },
                alt
            }
        }`)
        .then((data)=>setPost(data))
        .catch(console.error);
    }, []);

    return (<main className="bg-gradient-to-r from-gray-800 to-gray-800 min-h-screen p-12">
            <section className="container mx-auto">
            <h1 className="text-6xl flex justify-center text-sky-50 crusive mb-2">My Library</h1>
            <h2 className="text-lg text-gray-400 flex justify-center">Here you can find some books that I'm reading or have finished. </h2>
            <h2 className="text-lg text-gray-400 flex justify-center mb-12">I will be glad if you also like some of them.</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                {PostData && PostData.map((post, index) => (
                <article>
                    <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                        <span className="block h-64 relative rounded shadow leading-snug bg-white boarder-l-8 boarder-green-400" key={index}>
                            <img 
                                src={post.mainImage.asset.url}
                                alt={post.mainImage.alt}
                                className="w-full h-full rounded-r object-cover absolute"/>
                            <span>
                                <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75">
                                    {post.title}
                                </h3>
                            </span>
                        </span>
                    </Link>
                </article>
                ))}
            </div> 
        </section>
        </main>)
}