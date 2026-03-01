import { NavLink } from 'react-router-dom';
import { Home, User, Code, FileText, Send, BookOpen, Download } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="sidebar glass-panel">
            <div className="profile-section">
                <div className="avatar">TR</div>
                <h2 className="name">Thiyaku R</h2>
                <p className="title">Freelancing Web Developer</p>
            </div>

            <ul className="nav-links">
                <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}><Home size={20} /> <span>Home</span></NavLink></li>
                <li><NavLink to="/about"><User size={20} /> <span>About</span></NavLink></li>
                <li><NavLink to="/skills"><Code size={20} /> <span>Skills</span></NavLink></li>
                <li><NavLink to="/portfolio"><FileText size={20} /> <span>Portfolio</span></NavLink></li>
                <li><NavLink to="/resume"><Download size={20} /> <span>Resume</span></NavLink></li>
                <li><NavLink to="/blog"><BookOpen size={20} /> <span>Blog</span></NavLink></li>
                <li><NavLink to="/contact"><Send size={20} /> <span>Contact</span></NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
