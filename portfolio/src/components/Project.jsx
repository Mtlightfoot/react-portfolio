import data from '../data/projects.json';

const styles = {
    projectCard: {
        minHeight: '300px'
    },
    cardBtn: {
        margin: '5px',
        padding: '12px'
    }
}

function Project(props) {
    const imageUrl = data.image
    // Body
    return <div className="col-lg-4 mb-3">
        <div className="card" style={styles.projectCard}>
            <img className="card-img-top" src={props.image} alt="Card image cap" />
            <div className="card-body mx-auto">
                <h5 className="card-title">{props.title}</h5>
                <div className="card-subtitle mb-2 text-body-secondary">{props.skills}</div>

                <p className="card-text">{props.description}</p>
                <a href={props.site} className="btn btn-primary col-5" style={styles.cardBtn}>Go to Project</a>

                <a href={props.repo} className="btn btn-primary col-5" style={styles.cardBtn}>View Repo</a></div>

        </div>
    </div>
}

export default Project;