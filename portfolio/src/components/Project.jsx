import { NavLink } from 'react-router-dom';

const styles = {
    projectCard: {
        minHeight: '300px',
        boxShadow: '3px 3px 15px rgba(0, 0, 0, 0.4)'
    },
    cardBtn: {
        margin: '5px',
        padding: '12px'
    }
}

function Project(props) {
    console.log(props)
    // Body
    return <div className="col-lg-4 mb-3">
        <div className="card" style={styles.projectCard}>
            <img className="card-img-top" src={props.image} alt="Card image cap" />
            <div className="card-body mx-auto">
                <h5 className="card-title">{props.title}</h5>
                <div className="card-subtitle mb-2 text-body-secondary">{props.skills}</div>

                <p className="card-text">{props.description}</p>
                <a href={props.site} className="btn btn-primary col-5" style={styles.cardBtn}>Go to Project</a>

                <a href={props.repo} className="btn btn-primary col-5" style={styles.cardBtn}>View Repo</a>

                <a href={props.repo} className="btn btn-primary col-5" style={styles.cardBtn}><NavLink className="nav-link" to="/project-details" end>More Details</NavLink></a>
            </div>
        </div>
    </div>
}

export default Project;