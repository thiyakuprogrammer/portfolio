import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import SkillBadge from '../components/SkillBadge';

const Skills = () => {
    const skillsList = [
        'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Vite',
        'Node.js', 'Express', 'Python', 'UI Design', 'Figma',
        'Adobe Creative Suite', 'Git & GitHub', 'MySQL',
        'Sequelize ORM', 'Responsive Design', 'TailwindCSS'
    ];

    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            style={{ maxWidth: '900px', margin: '0 auto', paddingTop: '2rem' }}
        >
            <SectionHeading>My Skills</SectionHeading>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
                A comprehensive list of the technologies, tools, and design software I use to bring digital products to life.
            </p>

            <div className="skills-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                gap: '1.5rem',
            }}>
                {skillsList.map((skill, index) => (
                    <SkillBadge key={index} name={skill} index={index} />
                ))}
            </div>
        </motion.div>
    );
};

export default Skills;
