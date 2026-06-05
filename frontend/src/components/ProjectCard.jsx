import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {

    const openLink = (url) => {
        if (!url) return;
        window.open(url, '_blank', 'noopener,noreferrer');
    };

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
                    <button
                        onClick={() => openLink(project.githubUrl)}
                        className="btn-link"
                    >
                        <Github size={18} /> Code
                    </button>
                    <button
                        onClick={() => openLink(project.liveUrl)}
                        className="btn-link primary"
                    >
                        <ExternalLink size={18} /> Live Demo
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
