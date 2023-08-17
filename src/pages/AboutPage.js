import { PortfolioContext } from "../context/portfolioContext"
import { useContext } from "react"

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
                <div className="bg-white col-span-2 px-8 rounded-2xl mb-4">
                    <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon2-2.png" alt="placeholder"/>
                    <h3 className="text-4xl font-semibold my-4">Mahamadou Tirera</h3>
                    <p className="text-sm text-slate-500 font-normal pb-8 m">
                        I am a New York City based Full Stack Web Developer with a focus on web design, illustration, a visual development.  I have a diverse range of experience having worked across various fields and industries.
                        I have professional experience in customer service, in teaching and hospitality.
                        I am proficient in JavaScript, html/CSS, React, Firebase, bootstrap, Sass and Tailwind CSS.
                        
                    </p>
                </div>
            </section>
            {/** Education and Experience section */}
            <section className="md:grid grid-cols-2 gap-4 mb-4 mx-6 md:mx-32">
                <div className="bg-white  rounded-2xl mb-4">
                    
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

            <section className="md:grid grid-cols-4 gap-3 mb-4">
                <div className="bg-slate-200  rounded-3xl mb-4">Profiles</div>
                <div className="bg-slate-200 col-span-2 rounded-3xl mb-4">Let's work together </div>
                <div className="bg-slate-200  rounded-3xl mb-4">More about me </div>
            </section>
            <div className="mx-4">            
                <div className="w-1/2 bg-white  rounded-xl md:hidden lg:hidden">
                    <h3>image</h3>
                </div>

                <h2 className="lg:hidden text-2xl font-bold">SELF SUMMARY</h2>
                <div className="lg:hidden bg-white rounded-3xl my-4">
                    <h3 className="text-4xl font-semibold">Mahamadou Tirera</h3>
                    <p>
                        I am a New York City based Full Stack Web Developer with a focus on web design, illustration, a visual development. I have a wide range of tools in my developer tool box and always using the latest in the industry.
                        I have professional experience in customer service, in teaching and hospitality.
                        I am proficient in JavaScript, html/CSS, React, Firebase, bootstrap.
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