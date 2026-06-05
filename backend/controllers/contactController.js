const { ContactMessage } = require('../models');

exports.submitContactForm = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validation
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Name, email, and message are required.' });
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return res.status(400).json({ error: 'Please enter a valid email address.' });
        }

        // Save to database
        const newMessage = await ContactMessage.create({ name, email, message });

        console.log(`📩 New contact from ${name} <${email}>`);

        res.status(201).json({
            message: 'Message sent successfully! I will get back to you soon.',
            data: newMessage,
        });
    } catch (error) {
        console.error('Error submitting contact form:', error);
        res.status(500).json({ error: 'Failed to submit the form. Please try again later.' });
    }
};
