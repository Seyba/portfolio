import { Link } from "react-router-dom"

export const WorkPage = (props) => {
    const { id, title} = props
    console.log(title)
    return(
        <div>
            <Link to={`/works/${id}`}>
                <h3>Title: {title}</h3>
            </Link>
        </div>
    )
}