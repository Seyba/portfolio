import { useParams} from "react-router-dom"
import { WorkPage } from "./WorkPage"
const projects = [
    {id: '9393', title: 'Todo App ', githubLink: 'www.github.com/prodfddlf'},
    {id: 'sdk3', title: 'Weather App ', githubLink: 'www.github.com/prdsdodlf'},
    {id: '9c4d', title: 'Stock App ', githubLink: 'www.github.com/prodd33lf'},
    {id: 'jcm4', title: 'Expense App ', githubLink: 'www.github.com/plf'},
    {id: 'pdkc', title: 'Note App ', githubLink: 'www.github.com/ckddlf'},
    {id: '34dk', title: 'Redux Todo App ', githubLink: 'www.github.com/proddlf'}
]
export const WorksPage = (props) => {
    const params = useParams()
    console.log(params)

    return(
            
        <div className="py-8">
            <section className="md:grid grid-cols-3 gap-4 mb-4 mx-6 md:mx-32">
                <div className="bg-white  rounded-3xl mb-4">
                    <h3>Current Weather Alert</h3>
                    <p>Work</p>
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

            {/** Larges Screens */}
            <h2 className="md:text-center">Works Page Larger</h2>
            {projects.map(project => <WorkPage key={project.id} id={project.id} title={project.title}/>)}

        </div>
    )
}