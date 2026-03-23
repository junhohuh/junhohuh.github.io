export type Experience = {
	role: string;
	company: string;
	team?: string;
	period: string;
	bullets: string[];
};

export const experiences: Experience[] = [
	{
		role: 'Role Title',
		company: 'Company Name',
		team: 'Team or Department',
		period: 'Month Year – Month Year',
		bullets: [
			'What you built or improved, with measurable impact if possible.',
			'A second accomplishment in one line.',
		],
	},
	{
		role: 'Role Title',
		company: 'Company Name',
		team: 'Team or Department',
		period: 'Month Year – Month Year',
		bullets: [
			'What you built or improved, with measurable impact if possible.',
			'A second accomplishment in one line.',
		],
	},
];
