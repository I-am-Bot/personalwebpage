import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom"
import sanityClient from "../client.js";

export default function Post() {
    const [PostData, setPost] = useState(null);

    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "post"]{
            title,
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
    return (<main className="bg-rose-50 min-h-screen p-12">
        <section className="container mx-auto">
            <h1 className="text-6xl flex justify-center crusive">Reading List</h1>
            <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my blog!</h2>
            <div>
                {PostData && PostData.map((post, index) => (
                <article>
                    <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                        <span className="block h-64 relative rounded shadow leading-snug bg-white boarder-l-8 boarder-green-400" key={index}>
                            <img src={post.mainImage.asset.url}
                            alt={post.mainImage.alt}
                            className="w-full h-full rounded-r object-cover absolute"/>
                            <span>
                                <h3>
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