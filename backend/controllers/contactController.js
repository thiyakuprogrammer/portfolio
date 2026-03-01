const { ContactMessage } = require('../models');

// Handle new contact message submission
exports.submitContactForm = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Basic validation
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Name, email, and message are required.' });
        }

        const newMessage = await ContactMessage.create({
            name,
            email,
            message,
        });

        res.status(201).json({ message: 'Message sent successfully!', data: newMessage });
    } catch (error) {
        console.error('Error submitting contact form:', error);
        res.status(500).json({ error: 'Failed to submit the form. Please try again later.' });
    }
};
