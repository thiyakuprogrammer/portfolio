import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const Resume = () => {
    const handleDownload = () => {
        // In production, replace with actual CV file path
        alert('CV download feature - Please add your actual CV file to /public folder');
    };

    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            style={{ maxWidth: '900px', margin: '0 auto' }}
        >
            <SectionHeading>Resume</SectionHeading>

            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <button onClick={handleDownload} className="btn btn-primary" style={{ fontSize: '1.05rem' }}>
                    <Download size={20} /> Download CV
                </button>
            </div>

            <div className="resume-section glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
                <h2 style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.75rem', 
                    fontSize: '1.75rem',
                    marginBottom: '2rem',
                    color: 'var(--accent-color)'
                }}>
                    <GraduationCap size={28} /> Education
                </h2>

                <div className="resume-item" style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>SRM MCET</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                        Graphic Design & Web Development
                    </p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                        Currently pursuing studies in design and development
                    </p>
                </div>
            </div>

            <div className="resume-section glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
                <h2 style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.75rem', 
                    fontSize: '1.75rem',
                    marginBottom: '2rem',
                    color: 'var(--accent-color)'
                }}>
                    <Briefcase size={28} /> Experience
                </h2>

                <div className="resume-item" style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Freelance Web Developer</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.95rem' }}>
                        2023 - Present
                    </p>
                    <ul style={{ 
                        color: 'var(--text-secondary)', 
                        paddingLeft: '1.5rem',
                        lineHeight: '1.8'
                    }}>
                        <li>Developing responsive web applications using React and modern JavaScript</li>
                        <li>Creating bold, minimalist layouts that help brands tell their stories</li>
                        <li>Working with clients to deliver custom web solutions</li>
                        <li>Implementing full-stack features with Node.js and MySQL</li>
                    </ul>
                </div>

                <div className="resume-item">
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Graphic Designer</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.95rem' }}>
                        2022 - Present
                    </p>
                    <ul style={{ 
                        color: 'var(--text-secondary)', 
                        paddingLeft: '1.5rem',
                        lineHeight: '1.8'
                    }}>
                        <li>Designing visual content using Adobe Creative Suite</li>
                        <li>Creating brand identities and marketing materials</li>
                        <li>Collaborating with clients to understand their vision</li>
                        <li>Delivering high-quality design assets for web and print</li>
                    </ul>
                </div>
            </div>

            <div className="resume-section glass-panel" style={{ padding: '2.5rem' }}>
                <h2 style={{ 
                    fontSize: '1.75rem',
                    marginBottom: '1.5rem',
                    color: 'var(--accent-color)'
                }}>
                    Core Competencies
                </h2>
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1rem'
                }}>
                    <div>
                        <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Frontend</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                            React, HTML5, CSS3, JavaScript
                        </p>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Backend</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                            Node.js, Express, Python
                        </p>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Database</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                            MySQL, Sequelize ORM
                        </p>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Design</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                            UI/UX, Adobe Suite, Figma
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Resume;
