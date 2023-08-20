import { useParams} from "react-router-dom"
import { WorkPage } from "./WorkPage"
import { WorkItem } from "../components/WorkItem"
import { useContext} from 'react'
import { PortfolioContext } from "../context/portfolioContext"
export const WorksPage = (props) => {
    const ctx = useContext(PortfolioContext)
    const {projectData} = ctx
    const params = useParams()
    console.log(params)

    return(
            
        <div className="py-8">
            <section className="md:grid grid-cols-3 gap-4 mb-4 mx-6 md:mx-32">
                <div className="bg-white  rounded-3xl mb-4">
                    {projectData.map(item => <WorkItem works={item}/>)}
                    {/* {projects.map(project => <WorkPage key={project.id} id={project.id} title={project.title}/>)} */}
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
        </div>
    )
}