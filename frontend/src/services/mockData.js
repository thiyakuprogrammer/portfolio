// Mock data for when backend is not available (e.g., GitHub Pages deployment)

export const mockProjects = [
    {
        id: 1,
        title: "Project One",
        description: "A modern e-commerce platform built with React and Node.js featuring real-time inventory management and secure payment processing.",
        techStack: "React, Node.js, Express, MySQL",
        githubUrl: "https://github.com/thiyakuprogrammer/codexgenz.git",
        liveUrl: "https://strong-melomakarona-4353f5.netlify.app/",
        createdAt: "2026-01-15",
        updatedAt: "2026-01-15"
    },
    {
        id: 2,
        title: "Project Two",
        description: "A social media dashboard with analytics, post scheduling, and engagement tracking across multiple platforms.",
        techStack: "React, TypeScript, Firebase, TailwindCSS",
        githubUrl: "https://github.com/thiyakur/project-two",
        liveUrl: "https://project-two-demo.vercel.app",
        createdAt: "2026-01-20",
        updatedAt: "2026-01-20"
    },
    {
        id: 3,
        title: "Project Three",
        description: "A task management application with drag-and-drop functionality, team collaboration features, and deadline tracking.",
        techStack: "React, Redux, Node.js, MongoDB",
        githubUrl: "https://github.com/thiyakur/project-three",
        liveUrl: "https://project-three-demo.herokuapp.com",
        createdAt: "2026-02-01",
        updatedAt: "2026-02-01"
    },
    {
        id: 4,
        title: "Project Four",
        description: "A weather forecasting app with location-based predictions, interactive maps, and severe weather alerts.",
        techStack: "React, OpenWeather API, Chart.js, CSS3",
        githubUrl: "https://github.com/thiyakur/project-four",
        liveUrl: "https://project-four-demo.netlify.app",
        createdAt: "2026-02-10",
        updatedAt: "2026-02-10"
    },
    {
        id: 5,
        title: "Project Five",
        description: "A portfolio website builder with drag-and-drop editor, customizable themes, and one-click deployment.",
        techStack: "React, Next.js, Prisma, PostgreSQL",
        githubUrl: "https://github.com/thiyakur/project-five",
        liveUrl: "https://project-five-demo.vercel.app",
        createdAt: "2026-02-20",
        updatedAt: "2026-02-20"
    },
    {
        id: 6,
        title: "Project Six",
        description: "A recipe sharing platform with ingredient search, meal planning, and nutritional information tracking.",
        techStack: "React, GraphQL, Apollo, Node.js",
        githubUrl: "https://github.com/thiyakur/project-six",
        liveUrl: "https://project-six-demo.netlify.app",
        createdAt: "2026-03-01",
        updatedAt: "2026-03-01"
    }
];

export const useMockData = () => {
    // Check if we should use mock data (e.g., when API is not available)
    const shouldUseMock = import.meta.env.VITE_USE_MOCK_DATA === 'true' || 
                          import.meta.env.MODE === 'production';
    
    return shouldUseMock;
};
