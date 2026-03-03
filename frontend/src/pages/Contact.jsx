import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, MessageSquare, Send } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { submitContactForm } from '../services/api';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            // Try to submit to backend API
            await submitContactForm(formData);
            setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            // If backend is not available (Netlify deployment), show alternative message
            console.log('Backend not available, showing alternative contact info');
            setStatus({ 
                type: 'info', 
                message: 'Thank you for your message! Please reach me directly at thiyakur@example.com or connect on LinkedIn: linkedin.com/in/thiyakur' 
            });
            // Still clear the form
            setFormData({ name: '', email: '', message: '' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            style={{ maxWidth: '700px', margin: '0 auto' }}
        >
            <SectionHeading>Get In Touch</SectionHeading>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
                Have a project in mind or just want to say hi? Feel free to drop me a message. I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>

            <form onSubmit={handleSubmit} className="contact-form glass-panel" style={{ padding: '2.5rem' }}>
                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                    <label htmlFor="name" style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem', 
                        marginBottom: '0.5rem',
                        color: 'var(--text-primary)',
                        fontWeight: '500'
                    }}>
                        <User size={18} /> Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        style={{
                            width: '100%',
                            padding: '0.875rem 1rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: 'var(--radius-sm)',
                            color: 'var(--text-primary)',
                            fontSize: '1rem',
                            transition: 'var(--transition-normal)'
                        }}
                    />
                </div>

                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                    <label htmlFor="email" style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem', 
                        marginBottom: '0.5rem',
                        color: 'var(--text-primary)',
                        fontWeight: '500'
                    }}>
                        <Mail size={18} /> Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        style={{
                            width: '100%',
                            padding: '0.875rem 1rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: 'var(--radius-sm)',
                            color: 'var(--text-primary)',
                            fontSize: '1rem',
                            transition: 'var(--transition-normal)'
                        }}
                    />
                </div>

                <div className="form-group" style={{ marginBottom: '2rem' }}>
                    <label htmlFor="message" style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem', 
                        marginBottom: '0.5rem',
                        color: 'var(--text-primary)',
                        fontWeight: '500'
                    }}>
                        <MessageSquare size={18} /> Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        placeholder="Your message..."
                        style={{
                            width: '100%',
                            padding: '0.875rem 1rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: 'var(--radius-sm)',
                            color: 'var(--text-primary)',
                            fontSize: '1rem',
                            resize: 'vertical',
                            fontFamily: 'inherit',
                            transition: 'var(--transition-normal)'
                        }}
                    />
                </div>

                {status.message && (
                    <div style={{
                        padding: '1rem',
                        borderRadius: 'var(--radius-sm)',
                        marginBottom: '1.5rem',
                        background: status.type === 'success' ? 'rgba(34, 197, 94, 0.1)' : 
                                   status.type === 'info' ? 'rgba(59, 130, 246, 0.1)' : 
                                   'rgba(239, 68, 68, 0.1)',
                        border: `1px solid ${status.type === 'success' ? 'rgba(34, 197, 94, 0.3)' : 
                                             status.type === 'info' ? 'rgba(59, 130, 246, 0.3)' : 
                                             'rgba(239, 68, 68, 0.3)'}`,
                        color: status.type === 'success' ? '#22c55e' : 
                               status.type === 'info' ? '#3b82f6' : 
                               '#ef4444'
                    }}>
                        {status.message}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '1.05rem' }}
                >
                    {loading ? 'Sending...' : (
                        <>
                            <Send size={18} /> Send Message
                        </>
                    )}
                </button>
            </form>
        </motion.div>
    );
};

export default Contact;
