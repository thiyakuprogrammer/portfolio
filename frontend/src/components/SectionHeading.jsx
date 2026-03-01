import { motion } from 'framer-motion';

const SectionHeading = ({ children, align = 'left' }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: align, marginBottom: '2rem' }}
        >
            <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                display: 'inline-block',
                position: 'relative',
                paddingBottom: '0.5rem'
            }}>
                {children}
                <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: align === 'center' ? '50%' : 0,
                    transform: align === 'center' ? 'translateX(-50%)' : 'none',
                    width: '60px',
                    height: '4px',
                    background: 'var(--accent-color)',
                    borderRadius: '2px'
                }}></span>
            </h2>
        </motion.div>
    );
};

export default SectionHeading;
