import { useParams, Link} from "react-router-dom"
import { WorkPage } from "./WorkPage"
const projects = [
    {id: '9393', title: 'Todo App ', githubLink: 'www.github.com/prodfddlf'},
    {id: 'sdk3', title: 'Weather App ', githubLink: 'www.github.com/prdsdodlf'},
    {id: '9c4d', title: 'Stock App ', githubLink: 'www.github.com/prodd33lf'},
    {id: 'jcm4', title: 'Expense App ', githubLink: 'www.github.com/plf'},
    {id: 'pdkc', title: 'Note App ', githubLink: 'www.github.com/ckddlf'},
    {id: '34dk', title: 'Redux Todo App ', githubLink: 'www.github.com/proddlf'}
]
export const WorksPage = () => {
    const params = useParams()
    console.log(params)

    return(
        <div>
            <h2>Works Page</h2>
            {projects.map(project => <WorkPage id={project.id} title={project.title}/>)}
        </div>
    )
}