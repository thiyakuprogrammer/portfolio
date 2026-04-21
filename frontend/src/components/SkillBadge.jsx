import { motion } from 'framer-motion';
import './SkillBadge.css';

const SkillBadge = ({ name, index }) => {
    return (
        <motion.div
            className="skill-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            whileHover={{ y: -3, scale: 1.05 }}
        >
            <span className="skill-text">{name}</span>
        </motion.div>
    );
};

export default SkillBadge;
