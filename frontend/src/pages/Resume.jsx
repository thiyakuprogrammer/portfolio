import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Phone, Mail, MapPin, Linkedin, Code2, Languages } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import './Resume.css';

const Resume = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        const base = import.meta.env.BASE_URL.endsWith('/')
            ? import.meta.env.BASE_URL
            : import.meta.env.BASE_URL + '/';
        link.href = base + 'Thiyaku-CV.pdf';
        link.download = 'Thiyaku-R-CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const contacts = [
        { icon: <Phone size={15} />, text: '8122789379' },
        { icon: <Mail size={15} />, text: 'thiyakut20@gmail.com' },
        { icon: <MapPin size={15} />, text: '31/7, Mathichiyam, Madurai' },
        { icon: <Linkedin size={15} />, text: 'linkedin.com/in/thiyaku', link: 'https://www.linkedin.com/in/thiyaku' },
    ];

    const experience = [
        {
            company: 'TVS Automobile Solutions Pvt',
            role: 'Software Developer',
            period: '2025 – Present',
            green: true,
            bullets: [
                'Built responsive and interactive web pages using React.js',
                'Developed reusable components to improve efficiency; ensured smooth UX across devices and browsers',
                'Created RESTful APIs and handled server-side logic using Node.js; managed and optimised databases',
                'Integrated secure login functionality with Node.js backend and MySQL for real-time authentication',
            ],
        },
        {
            company: 'UI/UX Designer',
            role: 'Freelance',
            period: '2024 – 2025',
            green: false,
            bullets: [
                'Designed simple and user-friendly interfaces with a strong focus on usability',
                'Developed wireframes and prototypes to translate ideas into visual solutions',
                'Built intuitive user flows that improve accessibility and navigation',
                'Enhanced user satisfaction through clean layouts and effective design practices',
            ],
        },
    ];

    const techRows = [
        { cat: 'Programming Languages', skills: 'HTML, CSS, JavaScript, SQL' },
        { cat: 'Web Development',        skills: 'React JS, Node JS' },
        { cat: 'Tools',                  skills: 'Figma, Canva, Adobe Illustrator' },
    ];

    return (
        <motion.div
            className="page-container resume-page"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
        >
            <SectionHeading>Resume</SectionHeading>

            {/* ── Download ── */}
            <div className="resume-download-row">
                <button onClick={handleDownload} className="btn btn-primary">
                    <Download size={18} /> Download CV
                </button>
            </div>

            {/* ── Profile Card ── */}
            <section className="resume-card glass-panel">
                <div className="resume-profile-header">
                    <div>
                        <h2 className="resume-name">THIYAKU R</h2>
                        <p className="resume-role-tag">UI UX DESIGNER | REACT JS</p>
                    </div>
                </div>

                <div className="resume-contacts">
                    {contacts.map((c, i) => (
                        <span key={i} className="resume-contact-item">
                            <span className="contact-icon">{c.icon}</span>
                            {c.link
                                ? <a href={c.link} target="_blank" rel="noopener noreferrer">{c.text}</a>
                                : c.text}
                        </span>
                    ))}
                </div>

                <p className="resume-bio">
                    Motivated and detail-oriented Computer Science student currently pursuing
                    second-year undergraduate studies, with a strong interest in UI/UX design
                    and web development. Completed a practical internship, gaining hands-on
                    experience in designing intuitive user interfaces and building responsive
                    web applications. Proficient in HTML, CSS, JavaScript, and familiar with
                    React.js and backend fundamentals. Eager to learn emerging technologies
                    and contribute creative, efficient, and user-centered solutions to real-world projects.
                </p>
            </section>

            {/* ── Education ── */}
            <section className="resume-card glass-panel">
                <h3 className="resume-section-title">
                    <GraduationCap size={22} /> Education
                </h3>
                <div className="resume-edu-row">
                    <div className="resume-edu-left">
                        <p className="resume-inst">Bachelor of Computer Science & Engineering</p>
                        <p className="resume-sub">SRM Madurai College of Engineering & Technology</p>
                        <p className="resume-gpa">GPA: 8.89</p>
                    </div>
                    <span className="resume-badge">2024 – 2028</span>
                </div>
            </section>

            {/* ── Experience ── */}
            <section className="resume-card glass-panel">
                <h3 className="resume-section-title">
                    <Briefcase size={22} /> Internship / Experience
                </h3>

                {experience.map((exp, i) => (
                    <div key={i} className={`resume-exp-item ${i < experience.length - 1 ? 'resume-exp-divider' : ''}`}>
                        <div className="resume-exp-header">
                            <div>
                                <p className="resume-exp-company">{exp.company}</p>
                                <p className="resume-exp-role">{exp.role}</p>
                            </div>
                            <span className={`resume-badge ${exp.green ? 'badge-green' : ''}`}>
                                {exp.period}
                            </span>
                        </div>
                        <ul className="resume-bullets">
                            {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                        </ul>
                    </div>
                ))}
            </section>

            {/* ── Technical Profile ── */}
            <section className="resume-card glass-panel">
                <h3 className="resume-section-title">
                    <Code2 size={22} /> Technical Profile
                </h3>
                <table className="resume-table">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Skills</th>
                        </tr>
                    </thead>
                    <tbody>
                        {techRows.map((row, i) => (
                            <tr key={i}>
                                <td>{row.cat}</td>
                                <td>{row.skills}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            {/* ── Languages ── */}
            <section className="resume-card glass-panel">
                <h3 className="resume-section-title">
                    <Languages size={22} /> Languages
                </h3>
                <div className="resume-langs">
                    {[
                        { lang: 'Tamil', level: 'Native Speaker' },
                        { lang: 'English', level: 'Fluent' },
                    ].map((l, i) => (
                        <div key={i} className="lang-pill glass-panel">
                            <span className="lang-name">{l.lang}</span>
                            <span className="lang-level">{l.level}</span>
                        </div>
                    ))}
                </div>
            </section>

        </motion.div>
    );
};

export default Resume;
