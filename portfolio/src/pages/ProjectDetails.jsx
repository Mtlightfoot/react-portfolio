import Project from '../components/Project';
import projects from '../data/projects.json';

const styles = {
    projectCard: {
        minHeight: '500px',
        boxShadow: '3px 3px 15px rgba(0, 0, 0, 0.4)'
    },
    cardBtn: {
        margin: '5px',
        padding: '12px'
    }
}

function ProjectDetails() {
    let i = 0;
    console.log(projects)
    return <div className="pageBorder container-lg text-center">
        <h2 className="underline pb-3 mb-3 mt-3">{projects[i].title}</h2>
        <div className="row mt-5 mb-5 text-center justify-content-center">

            <div className="col-lg-8 mb-3">
                <div className="card" style={styles.projectCard}>
                    <img className="card-img-top-details" src={projects[i].image} alt="Card image cap" />
                    <div className="card-body mx-auto">
                        <h5 className="card-title">{projects[i].title}</h5>
                        <div className="card-subtitle mb-2 text-body-secondary">{projects[i].skills}</div>

                        <p className="card-text">{projects[i].description}</p>
                        <a href={projects[i].site} className="btn btn-primary col-5" style={styles.cardBtn}>Go to Project</a>

                        <a href={projects[i].repo} className="btn btn-primary col-5" style={styles.cardBtn}>View Repo</a>

                    </div>
                </div>
            </div>


        </div>
    </div>
}

export default ProjectDetails;