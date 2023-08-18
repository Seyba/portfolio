import { PortfolioContext } from "../context/portfolioContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

export const AboutPage = () => {
    const ctx = useContext(PortfolioContext)
    const { forcast, visitors } = ctx
    console.log(forcast)
    console.log(visitors)
    return(
        <div className="py-8">
            
            {/** summary section */}
            <section className="md:grid grid-cols-3 gap-4 mb-4 mx-6 md:mx-32">
                <div className="bg-white  rounded-3xl mb-4">
                    <h3>Current Weather Alert</h3>
                </div>
                <div className="bg-white col-span-2 px-8 rounded-3xl mb-4">
                    <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon2-2.png" alt="placeholder"/>
                    <h3 className="text-4xl font-semibold my-4">Mahamadou Tirera</h3>
                    <p className="text-sm text-slate-500 font-normal pb-8 m">
                        I am a New York City based Full Stack Web Developer with a focus on web design, illustration, a visual development.  I have a diverse range of experience having worked across various fields and industries.
                        I have professional experience in customer service, in teaching and hospitality.
                        I am proficient in JavaScript, HTML/CSS, React, Firebase, bootstrap, Sass and Tailwind CSS.
                        
                    </p>
                </div>
            </section>

            {/** Education and Experience section */}
            <section className="md:grid grid-cols-2 gap-4 mb-4 mx-6 md:mx-32">
                <div className="bg-white  rounded-3xl mb-4">
                    
                    <h3>EXPERIENCE</h3>
                    <h3>2019 - Present</h3>
                    <h3>Manager</h3>
                    <h4>Big Dream Farm LLC</h4>

                    <h3>2019-2016</h3>
                    <h3>Cook</h3>
                    <h4>Dos Caminos</h4>
                </div>
                <div className="bg-white rounded-3xl mb-4">
                    <h3>EDUCATION</h3>
                    <h3>2023</h3>
                    <h4>Google Sponsored Software Engineer Certification</h4>
                    <h4>Per Scholas</h4>

                    <h3>2019</h3>
                    <h4>Javascript | NodeJs | ReactJS Certification</h4>
                    <h4>Udemy</h4>

                    <h3>2003 - 2007</h3>
                    <h4>Bachelor Degree in Art</h4>
                    <h4>University of Bamako</h4>

                </div>
            </section>

            {/** Contact info & more about me redirect */}
            <section className="md:grid grid-cols-4 gap-4 mb-4 mx-6 md:mx-32">
                <div className="bg-white  rounded-3xl mb-4">
                    <div className="bg-gray-100 flex justify-center m-8 sm:mt-4 p-6 rounded-3xl">
                        <div className="bg-white rounded-full p-8 mr-2">
                            <Link to="https://github.com/Seyba">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    style={{ color: "#333" }}
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </Link>
                        </div>
                        <div className="bg-white rounded-full p-8 ml-2">
                            <Link to="https://www.linkedin.com/in/mahamadou-tirera-950939aa/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    style={{ color: "#0077b5" }}
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <h3>StAY WITH ME</h3>
                    <h3>Profiles</h3>
                </div>
                <div className="bg-white col-span-2 rounded-3xl mb-4">Let's work together </div>
                <div className="bg-white  rounded-2xl mb-4">More about me </div>
            </section>





            <div className="mx-4">            
                <div className="w-1/2 bg-white  rounded-xl md:hidden lg:hidden">
                    <h3>image</h3>
                </div>

                <h2 className="lg:hidden text-2xl font-bold">SELF SUMMARY</h2>
                <div className="lg:hidden bg-white rounded-2xl my-4">
                    <h3 className="text-2xl font-semibold">Mahamadou Tirera</h3>
                    <p>
                        I am a New York City based Full Stack Web Developer with a focus on web design, illustration, a visual development. I have a wide range of tools in my developer tool box and always using the latest in the industry.
                        I have professional experience in customer service, in teaching and hospitality.
                        I am proficient in JavaScript, HTML/CSS, React, Firebase, bootstrap.
                        I'm currently working on a ReactJS and Firebase web project.

                    </p>
                </div>

                <div className="lg:hidden bg-white rounded-3xl my-4">
                    <div>
                        <h3>EXPERIENCE</h3>
                        <h4>2020 - 2023</h4>
                        <h4>Manager</h4>

                    </div>
                    <div>
                        <h3>EXPERIENCE</h3>
                        <h4>2022 - 2023</h4>
                        <h4>Manager</h4>

                    </div>
                    
                    
                </div>
                <div className="lg:hidden bg-white rounded-3xl my-4">
                    <div>
                        <h3>EDUCATION</h3>
                        <h4>2003 - 2007</h4>
                        <h4>Bachelor Degree in Art</h4>

                    </div>
                    <div>
                        <h3>2019</h3>
                        <h4>UDEMY Javascript Bootcamp Certificate</h4>
                    </div>
                    <div>
                        <h3>2023</h3>
                        <h4>Per Scholas Google Sponsored Software Engineering Certificate</h4>
                    </div>
                    
                    
                </div>

                <div className="lg:hidden bg-white rounded-3xl my-4 py-4">
                    <div className="flex justify-around bg-slate-100 mx-4 py-12 rounded-3xl">
                        <div>Github</div>
                        <div>LinkedIN</div>
                    </div>
                    <h4>FIND ME THERE</h4>  
                    <h4>Profiles</h4>
                </div>
                <div className="lg:hidden bg-white rounded-3xl my-4 py-16">
                    <h3>Let's Work together</h3>
                </div>
                <div className="lg:hidden bg-white rounded-3xl my-4 py-16">
                    <h3>MORE ABOUT ME</h3>
                    
                </div>
            </div>
        </div>
    )
}