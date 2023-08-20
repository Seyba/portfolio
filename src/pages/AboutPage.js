import { PortfolioContext } from "../context/portfolioContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import {Spinner} from '../components/Spinner'
import prof from '../images/prof.jpg'

export const AboutPage = () => {
    const ctx = useContext(PortfolioContext)
    const { forcast, visitors } = ctx
    const ft = forcast.features
    console.log(forcast)
    const getLocalWarnings = () => {
        for(const prop in ft) {
            const newObj = ft[prop]
            const { instruction, headline, areaDesc, description } = newObj.properties
            // const formattedDesc = description.split('*')
            // const formattedAreas = areaDesc.split(';')
            //const warningMsg = `Instruction: ${instruction}, Advisory: ${headline}, Details: ${formattedDesc}, Locations: ${formattedAreas}`
            
            
            return description
        }
    }
    const weatherWarning = getLocalWarnings()
    const localWarningData = (weatherWarning? <h2>{weatherWarning}</h2>: <Spinner />)
    const getAreasAffected = () => {
        for(const prop in ft) {
            const newObj = ft[prop]

            // console.log(newObj.properties.headline)
            // console.log(newObj.properties.description)
            // console.log(newObj.properties.areaDesc)
            // console.log(newObj.properties.instruction)

            for(const i in newObj) {
                const obj2 = newObj[i]
                //console.log(obj2)
                for(const j in obj2) {
                    const obj3 = obj2[j]                

                    if(j === 'areaDesc'){
                        return obj3
                    }
                }
            }
        }
    }
    const getAnouncement = () => {
        for(const prop in ft) {
            const newObj = ft[prop]
            for(const i in newObj) {
                const obj2 = newObj[i]
                for(const j in obj2) {
                    const obj3 = obj2[j]
                    if(j === 'headline'){
                        return obj3
                    }
                }
            }
        }
    }
    const getIntruction = () => {
        for(const prop in ft) {
            const newObj = ft[prop]
            for(const i in newObj) {
                const obj2 = newObj[i]
                for(const j in obj2) {
                    const obj3 = obj2[j]
                    if(j === 'instruction'){
                        return obj3
                    }
                }
            }
        }
    }
    getAreasAffected()
    getAnouncement()
    getIntruction()
    const instr = getIntruction()
    //console.log(visitors)
    const warnInstr = getIntruction()
    return(
        <div className="py-8">
            <section className="md:grid grid-cols-1 gap-4 mb-4 mx-6 md:mx-32">
                
                <div className="bg-white  rounded-3xl mb-4">
                    
                    <h3>Instruction</h3>
                    <h4>{instr}</h4>
                </div>
                
            </section>
            {/** summary section */}
            <section className="md:grid grid-cols-3 gap-4 mb-4 mx-6 md:mx-32">
                <div className="bg-white  rounded-3xl mb-4">
                    {/* <h3>{forcast.title}</h3>
                    {localWarningData} */}

                    <div className="flex justify-center">
                        <img src={prof} alt="profile" className="h-50 w-40 mt-6 rounded-lg"/>
                    </div>
                    
                    
                    
                    
                </div>
                <div className="bg-white col-span-2 px-8 rounded-3xl mb-4">
                    <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon2-2.png" alt="placeholder"/>
                    <h3 className="text-4xl font-semibold my-4">Mahamadou Tirera</h3>
                    <p className="text-sm text-gray-400 font-medium pb-8 m">
                        I am a New York City based Full Stack Web Developer with a focus on web design, illustration, a visual development.  I have a diverse range of experience having worked across various fields and industries.
                        I have professional experience in customer service, in teaching and hospitality.
                        I am proficient in JavaScript, HTML/CSS, React, Firebase, bootstrap, Sass and Tailwind CSS.
                        
                    </p>
                </div>
            </section>

            {/** Education and Experience section */}
            <section className="md:grid grid-cols-2 gap-4 mb-4 mx-6 md:mx-32">
                <div className="bg-white  p-6 rounded-3xl mb-4">
                    
                    <h3 className="text-lg font-medium pb-4">EXPERIENCE</h3>
                    <div className="mb-6">
                        <h3 className="text-gray-400 ">2019 - Present</h3>
                        <h3 className="text-gray-950 font-semibold">Manager</h3>
                        <h4 className="text-gray-400 font-medium text-sm">Big Dream Farm LLC</h4>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-gray-400 ">2019-2016</h3>
                        <h3 className="text-gray-950 font-semibold">Cook</h3>
                        <h4 className="text-gray-400 font-medium text-sm">Dos Caminos</h4>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-3xl mb-4">
                    <h3 className="text-lg font-medium pb-4">EDUCATION</h3>
                    <div className="mb-6">
                        <h3 className="text-gray-400">2023</h3>
                        <h4 className="text-gray-950 font-semibold">Google Sponsored Software Engineer Certification</h4>
                        <h4 className="text-gray-400 font-medium text-sm">Per Scholas</h4>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-gray-400">2019</h3>
                        <h4 className="text-gray-950 font-semibold">Javascript | NodeJs | ReactJS Certification</h4>
                        <h4 className="text-gray-400 font-medium text-sm">Udemy</h4>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-gray-400">2003 - 2007</h3>
                        <h4 className="text-gray-950 font-semibold">Bachelor Degree in Art</h4>
                        <h4 className="text-gray-400 font-medium text-sm">University of Bamako</h4>
                    </div>

                </div>
            </section>

            {/** Contact info & more about me redirect */}
            <section className="md:grid grid-cols-4 gap-4 mb-4 mx-6 md:mx-32">
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
                    <div className="flex justify-between items-center px-6">
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