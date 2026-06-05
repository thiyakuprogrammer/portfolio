// Mock data — used when backend is unavailable (GitHub Pages / Netlify static deploy)

export const mockProjects = [
    {
        id: 1,
        title: "Women Safety App",
        description: "A safety web application built with React featuring emergency alerts, location sharing, and a help-request system to keep users safe.",
        techStack: "React, Node.js, Express, MySQL",
        githubUrl: "https://github.com/thiyakuprogrammer/women-safety",
        liveUrl: "https://strong-melomakarona-4353f5.netlify.app/",
        createdAt: "2026-01-15",
        updatedAt: "2026-01-15"
    },
    {
        id: 2,
        title: "CodeXGenZ Platform",
        description: "A developer community platform with code sharing, project showcases, and collaborative tools built for the next generation of developers.",
        techStack: "React, Node.js, Firebase, TailwindCSS",
        githubUrl: "https://github.com/thiyakuprogrammer/codexgenz",
        liveUrl: "https://react.dev/",
        createdAt: "2026-01-20",
        updatedAt: "2026-01-20"
    },
    {
        id: 3,
        title: "E-Commerce Dashboard",
        description: "A full-featured e-commerce admin dashboard with dark mode, real-time analytics, order management, and inventory tracking.",
        techStack: "React, Chart.js, Node.js, MySQL",
        githubUrl: "https://github.com/thiyakuprogrammer",
        liveUrl: "https://tailwindui.com/",
        createdAt: "2026-02-01",
        updatedAt: "2026-02-01"
    },
    {
        id: 4,
        title: "Weather Forecast App",
        description: "Real-time weather forecasting with location-based predictions, 7-day forecast, interactive maps, and severe weather alerts.",
        techStack: "React, OpenWeather API, Chart.js, CSS3",
        githubUrl: "https://github.com/thiyakuprogrammer",
        liveUrl: "https://openweathermap.org/",
        createdAt: "2026-02-10",
        updatedAt: "2026-02-10"
    },
    {
        id: 5,
        title: "UI/UX Portfolio Showcase",
        description: "A curated collection of UI/UX design work including wireframes, prototypes, brand identities, and interactive design systems made with Figma.",
        techStack: "Figma, Adobe Illustrator, Canva, HTML, CSS",
        githubUrl: "https://github.com/thiyakuprogrammer",
        liveUrl: "https://www.figma.com/",
        createdAt: "2026-02-20",
        updatedAt: "2026-02-20"
    },
    {
        id: 6,
        title: "Task Management Tool",
        description: "A productivity app with drag-and-drop kanban boards, team collaboration, deadline tracking, and real-time task updates.",
        techStack: "React, Redux, Node.js, MongoDB",
        githubUrl: "https://github.com/thiyakuprogrammer",
        liveUrl: "https://trello.com/",
        createdAt: "2026-03-01",
        updatedAt: "2026-03-01"
    }
];

export const useMockData = () => {
    const shouldUseMock = import.meta.env.VITE_USE_MOCK_DATA === 'true' ||
                          import.meta.env.MODE === 'production';
    return shouldUseMock;
};
