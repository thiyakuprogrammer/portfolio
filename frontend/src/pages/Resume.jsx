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

                {/* ── 2024 ── */}
                <div className="resume-item" style={{
                    marginBottom: '2rem',
                    paddingBottom: '2rem',
                    borderBottom: '1px solid var(--glass-border)'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                        <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>Freelance Web Developer</h3>
                        <span style={{
                            background: 'rgba(59,130,246,0.1)',
                            color: 'var(--accent-color)',
                            padding: '0.2rem 0.75rem',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                            border: '1px solid rgba(59,130,246,0.2)',
                            whiteSpace: 'nowrap'
                        }}>2024</span>
                    </div>
                    <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem', marginBottom: '0.75rem', fontWeight: '500' }}>
                        Self-Employed · Remote
                    </p>
                    <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.25rem', lineHeight: '1.9', fontSize: '0.95rem' }}>
                        <li>Built and delivered responsive React web applications for freelance clients</li>
                        <li>Integrated REST APIs and backend services using Node.js and Express</li>
                        <li>Designed clean, minimalist UI layouts with a focus on user experience</li>
                        <li>Managed full project lifecycle from requirement gathering to deployment</li>
                    </ul>
                </div>

                {/* ── 2025 ── */}
                <div className="resume-item" style={{
                    marginBottom: '2rem',
                    paddingBottom: '2rem',
                    borderBottom: '1px solid var(--glass-border)'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                        <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>Graphic Designer</h3>
                        <span style={{
                            background: 'rgba(59,130,246,0.1)',
                            color: 'var(--accent-color)',
                            padding: '0.2rem 0.75rem',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                            border: '1px solid rgba(59,130,246,0.2)',
                            whiteSpace: 'nowrap'
                        }}>2025</span>
                    </div>
                    <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem', marginBottom: '0.75rem', fontWeight: '500' }}>
                        Freelance · Adobe Creative Suite
                    </p>
                    <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.25rem', lineHeight: '1.9', fontSize: '0.95rem' }}>
                        <li>Created brand identities, logos, and visual systems for small businesses</li>
                        <li>Designed social media graphics, posters, and marketing collateral</li>
                        <li>Worked closely with clients to translate ideas into compelling visuals</li>
                        <li>Delivered print-ready and web-optimised design assets on tight deadlines</li>
                    </ul>
                </div>

                {/* ── 2026 ── */}
                <div className="resume-item">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                        <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>Full Stack Developer & UI Designer</h3>
                        <span style={{
                            background: 'rgba(34,197,94,0.1)',
                            color: '#22c55e',
                            padding: '0.2rem 0.75rem',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                            border: '1px solid rgba(34,197,94,0.2)',
                            whiteSpace: 'nowrap'
                        }}>2026 · Present</span>
                    </div>
                    <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem', marginBottom: '0.75rem', fontWeight: '500' }}>
                        Freelancer · SRM MCET
                    </p>
                    <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.25rem', lineHeight: '1.9', fontSize: '0.95rem' }}>
                        <li>Developing full-stack portfolio and client projects using React, Node.js, and MySQL</li>
                        <li>Combining design and engineering skills to build premium, dark-themed web products</li>
                        <li>Exploring advanced UI patterns — glassmorphism, micro-animations, and responsive grids</li>
                        <li>Actively seeking internship and collaborative opportunities in web development</li>
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
