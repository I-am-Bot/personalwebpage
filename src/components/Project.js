import React, { useState, useEffect } from "react"
import sanityClient from "../client.js";
import { Link } from "react-router-dom"

export default function Project() {
    const [projectData, setProject] = useState(null);
    
    useEffect(() => {
    sanityClient.fetch(`*[_type == "project"]{
        title,
        place,
        advisor,
        description,
        projectType,
        link
    }`).then((data) => setProject(data))
    .catch(console.error);
    }, []);

    return (
        <main className="bg-rose-50 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-6xl flex justify-center crusive">My Project</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my project page!</h2>
                <section className="grid grid-cols-2 gap-8">
                    {projectData && projectData.map((project, index) => (
                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3>
                            <a
                            href={project.link}
                            alt={project.title}
                            target = "_blank"
                            rel = "noopener noreferrer" className="font-bold">
                            {project.title}
                            </a>
                        </h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Affiliation</strong>:{" "}
                                {project.place}
                            </span>
                            <span>
                                <strong className="font-bold">Type</strong>:{" "}
                                {project.projectType}
                            </span>
                            <span>
                                <strong className="font-bold">Advisor</strong>:{" "}
                                {project.advisor}
                            </span>
                            <p className="my-6 text-gray-700 leading-relaxed">
                                {project.description}
                            </p>
                            <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-400">
                                View The Project{" "}
                                <span role="img" aria-label="right pointer">👉</span>
                            </a>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    );
    
}