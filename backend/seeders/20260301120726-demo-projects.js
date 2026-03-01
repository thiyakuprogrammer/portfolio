'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Projects', [
      {
        title: 'Project One',
        description: 'A modern landing page built with React and TailwindCSS.',
        techStack: 'React, TailwindCSS, Vite',
        githubUrl: 'https://github.com/dummy/project-one',
        liveUrl: 'https://dummy-live-link.com/project-one',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Project Two',
        description: 'E-commerce dashboard UI with dark mode and glassmorphism elements.',
        techStack: 'React, Material-UI, Chart.js',
        githubUrl: 'https://github.com/dummy/project-two',
        liveUrl: 'https://dummy-live-link.com/project-two',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Project Three',
        description: 'A full-stack blog application with user authentication and rich text editor.',
        techStack: 'Node.js, Express, MySQL, React',
        githubUrl: 'https://github.com/dummy/project-three',
        liveUrl: 'https://dummy-live-link.com/project-three',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Project Four',
        description: 'Real-time chat application using Socket.io and React.',
        techStack: 'React, Node.js, Socket.io',
        githubUrl: 'https://github.com/dummy/project-four',
        liveUrl: 'https://dummy-live-link.com/project-four',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Project Five',
        description: 'Weather forecasting app consuming open weather APIs.',
        techStack: 'JavaScript, HTML, CSS, REST APIs',
        githubUrl: 'https://github.com/dummy/project-five',
        liveUrl: 'https://dummy-live-link.com/project-five',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Project Six',
        description: 'Task management tool with drag-and-drop kanban boards.',
        techStack: 'React, Redux, Styled Components',
        githubUrl: 'https://github.com/dummy/project-six',
        liveUrl: 'https://dummy-live-link.com/project-six',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Projects', null, {});
  }
};
