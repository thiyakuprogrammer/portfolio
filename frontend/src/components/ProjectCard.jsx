import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            className="project-card glass-panel"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
        >
            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="tech-stack">
                    {project.techStack.split(',').map((tech, i) => (
                        <span key={i} className="tech-badge">{tech.trim()}</span>
                    ))}
                </div>

                <div className="project-links">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-link">
                        <Github size={18} /> Code
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-link primary">
                        <ExternalLink size={18} /> Live Demo
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
