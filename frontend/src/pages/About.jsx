import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import './About.css';
import logo from "../asserts/img.png";

const About = () => {
    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
        >
            <SectionHeading>About Me</SectionHeading>

            <div className="about-content glass-panel">
                <div className="about-text">
                    <p>Hi! I’m <strong>Thiyaku R</strong>, a graphic designer in the making studying at SRM MCET. I specialize in creating bold, minimalist layouts that help brands tell their stories.</p>
                    <p>When I’m not sketching ideas or diving into the Adobe Creative Suite, I’m exploring local cafes for the best latte art.</p>
                    <p>My journey in web development and design revolves around crafting clean, intuitive, and visually appealing user interfaces. I love bridging the gap between design and engineering to create products that not only look great but function flawlessly.</p>

                    <div className="about-details">
                        <div className="detail-item">
                            <span className="detail-label">Experience:</span>
                            <span className="detail-value text-gradient">Intermediate</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Specialization:</span>
                            <span className="detail-value text-gradient">Full Stack Developer & Designer</span>
                        </div>
                    </div>
                </div>

                <div className="about-image-container">
                    <div className="about-image">
                        <img src={logo} alt="Thiyaku R" style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            borderRadius: 'var(--radius-lg)'
                        }} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
export default About;
