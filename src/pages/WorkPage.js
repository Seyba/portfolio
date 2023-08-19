import { Link, useParams } from "react-router-dom"
import { useContext } from 'react'
import { PortfolioContext } from "../context/portfolioContext"

export const WorkPage = (props) => {
    const ctx = useContext(PortfolioContext)
    const { projectData } = ctx
    const params = useParams()
    const { id } = params
    //const project = projectData.map(i => i.id === id)
    const idx = projectData.findIndex(i => i.id === id)
    //console.log(projectData[idx])
    const project = projectData[idx]
    const { title, githubLink} = project
    //console.log(project)
    return(
        <div className="py-8">
            <section className="md:grid grid-cols-1 gap-4 mb-4 mx-6 md:mx-32">
                <div className="bg-white  rounded-3xl mb-4">
                    <h3>Work</h3>
                    <h4>{title}</h4>
                    <a href="www.github.com">project</a>
                    <Link to="www.github.com">{title}</Link>
                </div>
            </section>
            
        </div>
    )
}