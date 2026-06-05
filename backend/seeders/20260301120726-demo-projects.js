'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Projects', [
            {
                title: 'Women Safety App',
                description: 'A safety web application built with React featuring emergency alerts, location sharing, and a help-request system to keep users safe.',
                techStack: 'React, Node.js, Express, MySQL',
                githubUrl: 'https://github.com/thiyakuprogrammer/women-safety',
                liveUrl: 'https://strong-melomakarona-4353f5.netlify.app/',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'CodeXGenZ Platform',
                description: 'A developer community platform with code sharing, project showcases, and collaborative tools built for the next generation of developers.',
                techStack: 'React, Node.js, Firebase, TailwindCSS',
                githubUrl:  'https://openweathermap.org/',
                liveUrl: 'https://react.dev/',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'E-Commerce Dashboard',
                description: 'A full-featured e-commerce admin dashboard with dark mode, real-time analytics, order management, and inventory tracking.',
                techStack: 'React, Chart.js, Node.js, MySQL',
                githubUrl: 'https://github.com/thiyakuprogrammer',
                liveUrl: 'https://tailwindui.com/',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Weather Forecast App',
                description: 'Real-time weather forecasting with location-based predictions, 7-day forecast, interactive maps, and severe weather alerts.',
                techStack: 'React, OpenWeather API, Chart.js, CSS3',
                githubUrl: 'https://github.com/thiyakuprogrammer',
                liveUrl: 'https://github.com/thiyakuprogrammer/codexgenz',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'UI/UX Portfolio Showcase',
                description: 'A curated collection of UI/UX design work including wireframes, prototypes, brand identities, and interactive design systems made with Figma.',
                techStack: 'Figma, Adobe Illustrator, Canva, HTML, CSS',
                githubUrl: 'https://github.com/thiyakuprogrammer',
                liveUrl: 'https://www.figma.com/',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Task Management Tool',
                description: 'A productivity app with drag-and-drop kanban boards, team collaboration, deadline tracking, and real-time task updates.',
                techStack: 'React, Redux, Node.js, MongoDB',
                githubUrl: 'https://github.com/thiyakuprogrammer',
                liveUrl: 'https://trello.com/',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Projects', null, {});
    }
};
