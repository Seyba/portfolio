//import { useParams} from "react-router-dom"
import { WorkItem } from "../components/WorkItem"
import { useContext} from 'react'
import { PortfolioContext } from "../context/portfolioContext"
import { Spinner } from "../components/Spinner"
export const WorksPage = (props) => {
    const ctx = useContext(PortfolioContext)
    const {projectData, forcast} = ctx
    //const params = useParams()
    const ft = forcast.features

    const getLocalWarnings = () => {
        for(const prop in ft) {
            const newObj = ft[prop]
            const {headline } = newObj.properties
            // instruction,
            // headline,
            // areaDesc,
            // description
            return headline
        }
    }
    const warningMsg = getLocalWarnings()
    return(
            
        <div className="py-8">
            <section className="md:grid grid-cols-3 gap-4 mb-4 mx-6 md:mx-32">
                <div className="bg-white  rounded-3xl mb-4">
                    {
                        warningMsg? (
                            <div>
                                
                                <h2 className="text-3xl font-medium text-center">Instruction</h2>
                                <div className="flex justify-center py-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-normal px-6 py-3 leading-tight">{warningMsg}</h3>
                            </div>
                        ) : (
                            <div className="py-32 px-44 sm:px-48">
                                <Spinner/>
                            </div>
                        )
                    }
                    


                    {/* {projectData.map(item => <WorkItem works={item}/>)} */}
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
            <section className="md:grid grid-cols-1 gap-4 mb-4 mx-6 md:mx-32">
                <div className=" rounded-3xl">
                    <div className="md:grid grid-cols-3 gap-4">
                        {projectData.map(item => <WorkItem key={item.id} works={item}/>)}
                    </div>
                </div>
            </section>
            {/* <div className="md:grid grid-cols-3 gap-4">
                {projectData.map(item => <WorkItem key={item.id} works={item}/>)}
            </div> */}
        </div>
    )
}