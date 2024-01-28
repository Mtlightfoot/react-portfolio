import Project from '../components/Project';
import projects from '../data/projects.json';

function ProjectsGallery() {
    // Body
    return <div className="pageBorder container-lg text-center">
    <h2 className="underline pb-3 mb-3 mt-3">My Projects</h2>
        <div className="row mt-5 mb-5 text-center">
            {projects.map((project) => {
                return <Project key={project.id} title={project.title} description={project.description} skills={project.skills} image={project.image} site={project.site} repo={project.repo}/>;
            })}
        </div>
    </div>
}

export default ProjectsGallery;