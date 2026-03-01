import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'Getting Started with React and Vite',
            excerpt: 'Learn how to set up a modern React development environment using Vite for lightning-fast builds and hot module replacement.',
            date: '2026-02-15',
            readTime: '5 min read',
            category: 'Development'
        },
        {
            id: 2,
            title: 'The Art of Minimalist Design',
            excerpt: 'Exploring the principles of minimalist design and how less can truly be more when it comes to creating impactful user interfaces.',
            date: '2026-02-08',
            readTime: '7 min read',
            category: 'Design'
        },
        {
            id: 3,
            title: 'Building RESTful APIs with Node.js',
            excerpt: 'A comprehensive guide to creating scalable and maintainable REST APIs using Node.js, Express, and best practices.',
            date: '2026-01-28',
            readTime: '10 min read',
            category: 'Backend'
        },
        {
            id: 4,
            title: 'CSS Grid vs Flexbox: When to Use What',
            excerpt: 'Understanding the differences between CSS Grid and Flexbox, and knowing which layout system to choose for your projects.',
            date: '2026-01-20',
            readTime: '6 min read',
            category: 'CSS'
        },
        {
            id: 5,
            title: 'My Journey into Web Development',
            excerpt: 'A personal story about how I got started in web development and the lessons I learned along the way.',
            date: '2026-01-10',
            readTime: '8 min read',
            category: 'Personal'
        },
        {
            id: 6,
            title: 'Dark Mode Design Best Practices',
            excerpt: 'Tips and techniques for implementing beautiful and accessible dark mode designs that users will love.',
            date: '2026-01-05',
            readTime: '5 min read',
            category: 'Design'
        }
    ];

    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
        >
            <SectionHeading>Blog</SectionHeading>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
                Thoughts, tutorials, and insights on web development, design, and everything in between.
            </p>

            <div className="blog-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                gap: '2rem'
            }}>
                {blogPosts.map((post, index) => (
                    <motion.article
                        key={post.id}
                        className="blog-card glass-panel"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        style={{
                            padding: '2rem',
                            cursor: 'pointer',
                            transition: 'var(--transition-normal)'
                        }}
                    >
                        <div style={{
                            display: 'inline-block',
                            padding: '0.375rem 0.875rem',
                            background: 'rgba(59, 130, 246, 0.1)',
                            color: 'var(--accent-color)',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                            marginBottom: '1rem'
                        }}>
                            {post.category}
                        </div>

                        <h3 style={{
                            fontSize: '1.5rem',
                            marginBottom: '1rem',
                            color: 'var(--text-primary)',
                            lineHeight: '1.3'
                        }}>
                            {post.title}
                        </h3>

                        <p style={{
                            color: 'var(--text-secondary)',
                            marginBottom: '1.5rem',
                            lineHeight: '1.6'
                        }}>
                            {post.excerpt}
                        </p>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.5rem',
                            color: 'var(--text-secondary)',
                            fontSize: '0.9rem'
                        }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Calendar size={16} />
                                {new Date(post.date).toLocaleDateString('en-US', { 
                                    month: 'short', 
                                    day: 'numeric', 
                                    year: 'numeric' 
                                })}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Clock size={16} />
                                {post.readTime}
                            </span>
                        </div>
                    </motion.article>
                ))}
            </div>
        </motion.div>
    );
};

export default Blog;
