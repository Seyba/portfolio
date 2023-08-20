import { Link } from "react-router-dom"

export const WorkItem = (props) => {
    const { id, title, picture, desc, url} = props.works
    return(
        <div>
            <div className="bg-white rounded-3xl mb-3">
                <Link to={`${url}`}>
                    <img 
                        src={picture} 
                        alt={id}
                        className="h-auto max-w-full"
                    />
                </Link>
                <h3 className="text-gray-400 text-lg font-normal text-center">{title}</h3>
                <h3 className="text-slate-950 text-xl font-semibold text-center">{desc}</h3>
            </div>
        </div>
    )
}