import { Link } from "react-router-dom"

export const WorkItem = (props) => {
    const { id, title, picture, desc, url} = props.works
    console.log(title)
    return(
        <div>
            <div className="bg-white rounded-3xl mb-3">
                <h3>{title}</h3>
                <Link to={`${url}`}>
                    <img 
                        src={picture} 
                        alt={id}
                        className="h-40 w-40"
                    />
                </Link>
                
                <h3>{desc}</h3>
            </div>
            
            
            {/* <h3>{desc}</h3>
            <Link to={`/works/work/${id}`}>
                <div className="w-50 h-50">
                    <img src={picture} alt={id}/>
                </div>
                <h3>{title}</h3>
            </Link> */}
        </div>
    )
}