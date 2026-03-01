import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { getProjects } from '../services/api';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const data = await getProjects();
                setProjects(data);
            } catch (err) {
                setError('Failed to load projects. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
        >
            <SectionHeading>My Projects</SectionHeading>
            
            <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
                A collection of projects I've worked on, showcasing my skills in full-stack development and design.
            </p>

            {loading && (
                <div className="loading-container" style={{ textAlign: 'center', padding: '3rem' }}>
                    <div className="spinner"></div>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>Loading projects...</p>
                </div>
            )}

            {error && (
                <div className="error-message glass-panel" style={{ 
                    padding: '2rem', 
                    textAlign: 'center', 
                    color: '#ef4444',
                    marginTop: '2rem'
                }}>
                    {error}
                </div>
            )}

            {!loading && !error && (
                <div className="projects-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: '2rem',
                }}>
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            )}

            {!loading && !error && projects.length === 0 && (
                <div className="empty-state glass-panel" style={{ 
                    padding: '3rem', 
                    textAlign: 'center',
                    marginTop: '2rem'
                }}>
                    <p style={{ color: 'var(--text-secondary)' }}>No projects found. Check back soon!</p>
                </div>
            )}
        </motion.div>
    );
};

export default Portfolio;
