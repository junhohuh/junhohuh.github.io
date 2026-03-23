export type Project = {
	title: string;
	summary: string;
	tech: string[];
	repoUrl?: string;
	demoUrl?: string;
};

export const projects: Project[] = [
	{
		title: 'Personal website',
		summary: 'Static portfolio and résumé hub built with Astro and Tailwind.',
		tech: ['Astro', 'TypeScript', 'Tailwind CSS'],
		repoUrl: 'https://github.com/yourusername/personal_website',
	},
	{
		title: 'Project two (placeholder)',
		summary: 'Replace this card with a real project: one line on the problem and what you built.',
		tech: ['Your stack'],
		repoUrl: 'https://github.com',
	},
];
