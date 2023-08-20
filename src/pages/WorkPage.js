import { Link, useParams } from "react-router-dom"
import { useContext } from 'react'
import { PortfolioContext } from "../context/portfolioContext"

export const WorkPage = (props) => {
    const ctx = useContext(PortfolioContext)
    const { projectData } = ctx
    const params = useParams()
    const { id } = params

    const idx = projectData.findIndex(i => i.id === id)

    const project = projectData[idx]
    const { title, url, picture} = project

    return(
        <div className="py-8">
            <section className="md:grid grid-cols-1 gap-4 mb-4 mx-6 md:mx-32">
                <div className="bg-white  rounded-3xl mb-4">
                    <h3>Work</h3>
                    <h4>{title}</h4>
                    <div className="w-60 h-60">
                        <Link to={`${url}`}>
                            <img src={picture} alt="app"/>
                        </Link>
                    </div>                    
                </div>
            </section>
            
        </div>
    )
}