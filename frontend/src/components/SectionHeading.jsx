import { motion } from 'framer-motion';
import './SectionHeading.css';

const SectionHeading = ({ children, align = 'left' }) => {
    return (
        <motion.div
            className="section-heading-wrapper"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: align, marginBottom: '2rem' }}
        >
            <h2 className="section-heading">
                {children}
                <span className="heading-underline"></span>
            </h2>
        </motion.div>
    );
};

export default SectionHeading;
