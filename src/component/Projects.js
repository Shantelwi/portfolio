import { CodeIcon } from "@heroicons/react/solid";
import React from "react";

function Projects() {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Apps I've Built
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        These are the projects that I've built using Python and Javscript. Along with their respective frameworks.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <a href="http://54.244.158.147/" className="sm:w-1/2 w-100 p-4">
                        <div className="flex relative">
                            <img
                                src="https://www.shutterstock.com/image-photo/calculator-measuring-tape-food-products-260nw-2271197993.jpg"
                                className="absolute insert-0 w-full h-full object-cover object-center"
                                alt="cal_count"
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                    Python and Flask
                                </h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">
                                    Calorie Counter
                                </h1>
                                <p className="leading-relaxed">Enter food items and their calories to calculate your caloric intake for the day.</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="flex flex-wrap -m-4">
                    <a href="https://github.com/Shantelwi/Daily_Bugle_Blogs.git" className="sm:w-1/2 w-100 p-4">
                        <div className="flex relative">
                            <img
                                src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/spider-man-comics-split-image.jpg"
                                className="absolute insert-0 w-full h-full object-cover object-center"
                                alt="blog"
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                    Javascript and React
                                </h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">
                                    Daily Bugle Blogs
                                </h1>
                                <p className="leading-relaxed">A blog post where people can log in and post about different events going on in the Marvel Universe.</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="flex flex-wrap -m-4">
                    <a href="https://github.com/Shantelwi/HP_spells_generator" className="sm:w-1/2 w-100 p-4">
                        <div className="flex relative">
                            <img
                                src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/06/harry-potter-glasses.jpg"
                                className="absolute insert-0 w-full h-full object-center"
                                alt="HP"
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                    Javascript and React
                                </h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">
                                    Harry Potter's Spell Generator
                                </h1>
                                <p className="leading-relaxed">A site that lets anyone look up any spell that was used in The Wizarding World of Harry Potter.</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="flex flex-wrap -m-4">
                    <a href="https://github.com/Shantelwi/wedding_invite" className="sm:w-1/2 w-100 p-4">
                        <div className="flex relative">
                            <img
                                src="https://i.etsystatic.com/21861859/r/il/2421bc/3414125478/il_300x300.3414125478_8iut.jpg"
                                className="absolute insert-0 w-full h-full object-center"
                                alt="HP"
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                    Javascript and React
                                </h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">
                                    Interactive Wedding Invitation
                                </h1>
                                <p className="leading-relaxed">A website invitation that sends an email everytime a guest submits an rsvp and guest can check the links to your gift registries.</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
