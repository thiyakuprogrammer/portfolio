import { motion } from 'framer-motion';

const SkillBadge = ({ name, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            whileHover={{ y: -3, scale: 1.05 }}
            style={{
                padding: '0.75rem 1.5rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--glass-border)',
                borderRadius: 'var(--radius-lg)',
                color: 'var(--text-primary)',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'default',
                boxShadow: 'var(--glass-shadow)'
            }}
        >
            {name}
        </motion.div>
    );
};

export default SkillBadge;
