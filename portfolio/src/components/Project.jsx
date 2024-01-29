import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import projects from "../data/projects.json";

// The styling for the individual project cards
const styles = {
    projectCard: {
        minHeight: '300px',
        boxShadow: '3px 3px 15px rgba(0, 0, 0, 0.4)'
    },
    cardBtn: {
        margin: '5px',
        padding: '12px',
        backgroundColor: '#AD974F'
    }
}

// The code for the individual project cards, props grabs the information for the project cards from the array of objects in data/projects.json
function Project(props) {

    let { id } = useParams()
    const [moreDetails, setMoreDetails] = useState(null)
    useEffect(() => {

        const project = projects.find(p => p.id === id)
        if (project) {
            setMoreDetails(project)
        }
    }, [id])
    console.log(projects)
    return <div className="col-lg-4 mb-3">
        <div className="card" style={styles.projectCard}>
            <img className="card-img-top" src={props.image} alt="Card image cap" />
            <div className="card-body mx-auto">
                <h5 className="card-title">{props.title}</h5>
                <div className="card-subtitle mb-2 text-body-secondary">{props.skills}</div>

                <p className="card-text">{props.description}</p>
                <a href={props.site} className="btn btn-primary col-5" style={styles.cardBtn}>Go to Project</a>

                <a href={props.repo} className="btn btn-primary col-5" style={styles.cardBtn}>View Repo</a>

                <Link className="nav-link" style={styles.cardBtn} to={moreDetails ? `/project-details/${moreDetails.id}` : "#"}>More Details</Link>
            </div>
        </div>
    </div>
}

export default Project;