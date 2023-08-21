import { Link } from "react-router-dom"
import { PortfolioContext } from "../context/portfolioContext"
import { useContext } from "react"
import { Spinner } from "../components/Spinner"


export const HomePage = () => {
    const ctx = useContext(PortfolioContext)

    const { forcast } = ctx
    const ft = forcast.features
    const getWarnings = () => {
        for(const prop in ft) {
            const newObj = ft[prop]
            const { areaDesc} = newObj.properties
            return areaDesc
        }
    }
    const getDescription = () => {
        for(const prop in ft) {
            const newObj = ft[prop]
            const { description} = newObj.properties
            return description
        }
    }
    const advisory = getWarnings()
    const warningDesc = getDescription()
    return(
        <div className="py-8">
            <section className="md:grid grid-cols-1 gap-4 mb-4 mx-6 md:mx-32 animate-fade-down animate-once animate-duration-1000 animate-ease-linear">
                <div className="bg-white  rounded-3xl mb-4">
                    
                    {
                        advisory? (
                            <div>
                                
                                <h2 className="text-3xl font-medium text-center animate-jump animate-infinite animate-duration-[3000ms] animate-ease-linear">Weather Advisory</h2>
                                <div className="flex justify-center py-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                                    </svg>
                                </div>
                                <h3 
                                    className="text-xl text-center text-gray-400 font-medium px-6 py-3 leading-tight">{advisory}</h3>
                            </div>
                        ) : (
                            <div className="flex justify-center py-32 sm:px-48">
                                <Spinner/>
                            </div>
                        )
                    }
                </div>
                
            </section>
            <section className="md:grid grid-cols-2 gap-4 mb-4 mx-6 md:mx-32">
                
                <div className="bg-white  rounded-3xl mb-4 animate-fade-right animate-once animate-duration-1000 animate-ease-linear">
                    <h3 className="text-center text-2xl font-semibold">Current Weather Alert</h3>
                    <h3 className="text-gray-400 text-sm font-semibold pt-16 pb-4 px-8">{warningDesc}</h3>
                </div>
                <div className="bg-white px-8 rounded-3xl mb-4 animate-fade-left animate-once animate-duration-1000 animate-ease-linear">
                    <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon2-2.png" alt="placeholder"/>
                    <h3 className="text-4xl font-semibold my-4">Mahamadou Tirera</h3>
                    <p className="text-sm text-gray-400 font-medium pb-8 m">
                        I am a New York City based Full Stack Web Developer with a focus on web design, illustration, a visual development.  I have a diverse range of experience having worked across various fields and industries.
                        I have professional experience in customer service, in teaching and hospitality.
                        I am proficient in JavaScript, HTML/CSS, React, Firebase, bootstrap, Sass and Tailwind CSS.
                        
                    </p>
                </div>
            </section>
            <section className="md:grid grid-cols-4 gap-4 mb-4 mx-6 md:mx-32 animate-fade-up animate-once animate-duration-1000 animate-ease-linear">
                <div className="bg-white  py-1 rounded-3xl mb-4">
                    <div className="bg-gray-50 flex justify-center m-8 p-4 rounded-3xl">
                        <div className="bg-white rounded-full p-6 mr-2">
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
                        <div className="bg-white rounded-full p-6 ml-2">
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
                    <div className="flex justify-between items-center px-6 ">
                        <div>
                            <h5 className="text-sm font-semibold text-gray-300">FOLLOW ME</h5>
                            <h5 className="py-2 text-md font-semibold">Profiles</h5>
                        </div>
                        <div >
                            <Link to="/contact">
                                <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon-2.svg" alt="svg"/>
                            </Link>
                        </div>
                    </div>
                    
                </div>
                <div className="bg-white col-span-2 rounded-3xl mb-4 px-6 pb-6">
                    <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon2-2.png" alt="placeholder"/>
                    <div className="flex justify-between items-end pt-6">
                        <Link to="/contact">
                            <div>
                                <h5 className="text-5xl font-medium">Let's</h5>
                                <h5 className="text-5xl font-medium">work <span className="text-gray-300">together.</span></h5>
                            </div>
                        </Link>
                        <div>
                            <Link to="/contact">
                                <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon-2.svg" alt="svg"/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-white  rounded-3xl mb-4 px-6">
                    <div className="flex justify-end">
                        <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon2-2.png" alt="placeholder"/>
                    </div>
                    <div className="flex justify-between mt-20 items-end">
                        <Link to="/contact">
                            <div>
                                <h5 className="text-sm font-semibold text-gray-300">MORE ABOUT ME</h5>
                                <h5 className="text-md font-semibold">Credentials</h5>
                            </div>
                        </Link>

                        <div>
                            <Link to="/contact">
                                <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon-2.svg" alt="svg"/>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}