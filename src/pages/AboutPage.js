import { PortfolioContext } from "../context/portfolioContext"
import { useContext } from "react"

export const AboutPage = () => {
    const ctx = useContext(PortfolioContext)
    const { forcast, visitors } = ctx
    console.log(forcast)
    console.log(visitors)
    return(
        <div className="text-center max-auto">
            {/** Small devices stuff */}
            <div className="md:flex justify-around">
                <div>One</div>
                <div>Two</div>
                <div>Three</div>
            </div>
            {/** summary section */}
            <section className="md:grid grid-cols-3 gap-3 mb-4">
                <div className="bg-slate-200  rounded-3xl mb-4">Img section</div>
                <div className="bg-slate-200 col-span-2 py-8 rounded-3xl mb-4">summary section </div>
            </section>
            {/** Education and Experience section */}
            <section className="md:grid grid-cols-2 gap-3 mb-4">
                <div className="bg-slate-200  rounded-3xl mb-4">EXPERIENCE</div>
                <div className="bg-slate-200 rounded-3xl mb-4">EDUCATION </div>
            </section>

            <section className="md:grid grid-cols-4 gap-3 mb-4">
                <div className="bg-slate-200  rounded-3xl mb-4">Profiles</div>
                <div className="bg-slate-200 col-span-2 py-8 rounded-3xl mb-4">Let's work together </div>
                <div className="bg-slate-200  rounded-3xl mb-4">More about me </div>
            </section>
            <div className="mx-4">            
                <div className="w-1/2 bg-white  rounded-xl md:hidden lg:hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" 
                        alt="profile"
                        className="w-60"
                    />
                </div>

                <h2 className="lg:hidden text-2xl font-bold">SELF SUMMARY</h2>
                <div className="lg:hidden bg-white rounded-3xl my-4">
                    <h3 className="text-4xl font-semibold">Mahamadou Tirera</h3>
                    <p>
                        I am a New York City based Full Stack Web Developer with a focus on web design, illustration, a visual development. I have a wide range of tools in my developer tool box and always using the latest in the industry.
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