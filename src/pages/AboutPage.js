import { PortfolioContext } from "../context/portfolioContext"
import { useContext } from "react"

export const AboutPage = () => {
    const ctx = useContext(PortfolioContext)
    const { forcast, visitors } = ctx
    console.log(forcast)
    console.log(visitors)
    return(
        <div className="text-center max-auto">
            {/** Small device stuff */}
            <div className="w-1/2 bg-white  rounded-xl md:hidden lg:hidden">
                <img 
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" 
                    alt="profile"
                    className="w-60"
                />
            </div>
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
            <div className="grid grid-cols-2 gap-2 sm:hidden">
                <div>
                    <img src="https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png" alt="cloud"/>

                </div>
                <div>
                    two
                </div>
            </div>
        </div>
    )
}