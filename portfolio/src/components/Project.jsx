import { Link } from 'react-router-dom';
import projects from "../data/projects.json";
import PropTypes from 'prop-types';

// The styling for the individual project cards
const styles = {
    projectCard: {
        minHeight: '300px',
        boxShadow: '3px 3px 15px rgba(0, 0, 0, 0.4)'
    },
}

// The code for the individual project cards, props grabs the information for the project cards from the array of objects in data/projects.json
function Project({ id, image, title }) {

    return <div className="col-lg-4 mb-3">
        <div className="card" style={styles.projectCard}>
            <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-body mx-auto">
                <h5 className="card-title underline pb-2 mb-3">{title}</h5>
                <Link className="nav-link btn projectBtn" style={styles.cardBtn} to={`/project-details/${id}`}>More Details</Link>
            </div>

        </div>
    </div>
}

Project.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    site: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
};

export default Project;