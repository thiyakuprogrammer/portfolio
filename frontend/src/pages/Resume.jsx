import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Phone, Mail, MapPin, Linkedin, Code2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const Resume = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = import.meta.env.BASE_URL + 'Thiyaku-CV (1).pdf';
        link.download = 'Thiyaku-R-CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const sectionHead = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        fontSize: '1.5rem',
        marginBottom: '1.75rem',
        color: 'var(--accent-color)',
        fontWeight: '700'
    };

    const badge = (label, green = false) => ({
        background: green ? 'rgba(34,197,94,0.1)' : 'rgba(59,130,246,0.1)',
        color: green ? '#22c55e' : 'var(--accent-color)',
        padding: '0.2rem 0.75rem',
        borderRadius: 'var(--radius-sm)',
        fontSize: '0.82rem',
        fontWeight: '600',
        border: `1px solid ${green ? 'rgba(34,197,94,0.25)' : 'rgba(59,130,246,0.25)'}`,
        whiteSpace: 'nowrap',
    });

    const divider = {
        borderBottom: '1px solid var(--glass-border)',
        marginBottom: '1.75rem',
        paddingBottom: '1.75rem',
    };

    const bullet = {
        color: 'var(--text-secondary)',
        paddingLeft: '1.25rem',
        lineHeight: '1.9',
        fontSize: '0.93rem',
    };

    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            style={{ maxWidth: '860px', margin: '0 auto' }}
        >
            <SectionHeading>Resume</SectionHeading>

            {/* ── Download Button ── */}
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <button onClick={handleDownload} className="btn btn-primary" style={{ fontSize: '1rem', gap: '0.6rem' }}>
                    <Download size={19} /> Download CV
                </button>
            </div>

            {/* ── Profile ── */}
            <div className="glass-panel" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
                {/* Header row */}
                <div style={{ marginBottom: '1.25rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: '800', letterSpacing: '0.5px' }}>THIYAKU R</h2>
                    <p style={{ color: 'var(--accent-color)', fontWeight: '600', fontSize: '1rem', marginTop: '0.25rem' }}>
                        UI UX DESIGNER | REACT JS
                    </p>
                </div>

                {/* Contact info */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem 2rem', marginBottom: '1.5rem' }}>
                    {[
                        { icon: <Phone size={15} />, text: '8122789379' },
                        { icon: <Mail size={15} />, text: 'thiyakut20@gmail.com' },
                        { icon: <MapPin size={15} />, text: '31/7, Mathichiyam, Madurai' },
                        { icon: <Linkedin size={15} />, text: 'linkedin.com/in/thiyaku', link: 'https://www.linkedin.com/in/thiyaku' },
                    ].map((c, i) => (
                        <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            <span style={{ color: 'var(--accent-color)' }}>{c.icon}</span>
                            {c.link
                                ? <a href={c.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>{c.text}</a>
                                : c.text}
                        </span>
                    ))}
                </div>

                {/* Profile paragraph */}
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '0.95rem' }}>
                    Motivated and detail-oriented Computer Science student currently pursuing
                    second-year undergraduate studies, with a strong interest in UI/UX design
                    and web development. Completed a practical internship, gaining hands-on
                    experience in designing intuitive user interfaces and building responsive
                    web applications. Proficient in HTML, CSS, JavaScript, and familiar with
                    React.js and backend fundamentals. Eager to learn emerging technologies
                    and contribute creative, efficient, and user-centered solutions to real-world projects.
                </p>
            </div>

            {/* ── Education ── */}
            <div className="glass-panel" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
                <h2 style={sectionHead}><GraduationCap size={26} /> Education</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.3rem' }}>
                            Bachelor of Computer Science & Engineering
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                            SRM Madurai College of Engineering & Technology
                        </p>
                        <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem', marginTop: '0.35rem', fontWeight: '600' }}>
                            GPA: 8.89
                        </p>
                    </div>
                    <span style={badge('2024 – 2028')}>2024 – 2028</span>
                </div>
            </div>

            {/* ── Experience ── */}
            <div className="glass-panel" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
                <h2 style={sectionHead}><Briefcase size={26} /> Internship / Experience</h2>

                {/* TVS – Software Developer */}
                <div style={divider}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '700' }}>TVS Automobile Solutions Pvt</h3>
                            <p style={{ color: 'var(--accent-color)', fontSize: '0.88rem', fontWeight: '600', marginTop: '0.2rem' }}>Software Developer</p>
                        </div>
                        <span style={badge('2025 – Present', true)}>2025 – Present</span>
                    </div>
                    <ul style={bullet}>
                        <li>Built responsive and interactive web pages using React.js</li>
                        <li>Developed reusable components to improve efficiency and ensured smooth user experience across devices and browsers</li>
                        <li>Created RESTful APIs and handled server-side logic using Node.js; managed databases and optimised backend performance</li>
                        <li>Integrated secure login functionality with Node.js backend and MySQL database for real-time authentication</li>
                    </ul>
                </div>

                {/* UI/UX Designer */}
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '700' }}>UI/UX Designer</h3>
                            <p style={{ color: 'var(--accent-color)', fontSize: '0.88rem', fontWeight: '600', marginTop: '0.2rem' }}>Freelance</p>
                        </div>
                        <span style={badge('2024 – 2025')}>2024 – 2025</span>
                    </div>
                    <ul style={bullet}>
                        <li>Designed simple and user-friendly interfaces with a strong focus on usability and smooth user experience</li>
                        <li>Developed wireframes and prototypes to translate ideas into visual solutions</li>
                        <li>Built intuitive user flows that improve accessibility and navigation</li>
                        <li>Enhanced user satisfaction through clean layouts and effective design practices</li>
                    </ul>
                </div>
            </div>

            {/* ── Technical Profile ── */}
            <div className="glass-panel" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
                <h2 style={sectionHead}><Code2 size={26} /> Technical Profile</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                            <th style={{ padding: '0.6rem 1rem', textAlign: 'left', color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Category</th>
                            <th style={{ padding: '0.6rem 1rem', textAlign: 'left', color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Skills</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { cat: 'Programming Languages', skills: 'HTML, CSS, JavaScript, SQL' },
                            { cat: 'Web Development',       skills: 'React JS, Node JS' },
                            { cat: 'Tools',                 skills: 'Figma, Canva, Adobe Illustrator' },
                        ].map((row, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                <td style={{ padding: '0.75rem 1rem', color: 'var(--text-primary)', fontSize: '0.93rem', fontWeight: '500' }}>{row.cat}</td>
                                <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)', fontSize: '0.93rem' }}>{row.skills}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ── Languages ── */}
            <div className="glass-panel" style={{ padding: '2rem' }}>
                <h2 style={{ ...sectionHead, marginBottom: '1rem' }}>Languages</h2>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    {[
                        { lang: 'Tamil', level: 'Native Speaker' },
                        { lang: 'English', level: 'Fluent' },
                    ].map((l, i) => (
                        <div key={i} className="glass-panel" style={{ padding: '0.75rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                            <span style={{ fontWeight: '600', fontSize: '1rem' }}>{l.lang}</span>
                            <span style={{ color: 'var(--accent-color)', fontSize: '0.85rem' }}>{l.level}</span>
                        </div>
                    ))}
                </div>
            </div>

        </motion.div>
    );
};

export default Resume;
