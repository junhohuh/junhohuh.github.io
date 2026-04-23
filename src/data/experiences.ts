export type Experience = {
	role: string;
	company: string;
	team?: string;
	period: string;
	bullets: string[];
};

export const experiences: Experience[] = [
	{
		role: 'Product Manager (Contract)',
		company: 'Twitch',
		period: '08/2026 – 12/2026',
		bullets: [
			'What you built or improved, with measurable impact if possible.',
			'A second accomplishment in one line.',
		],
	},
	{
		role: 'FDE Intern',
		company: 'Palantir Technologies',
		period: '03/2025 – 08/2025',
		bullets: [
			'What you built or improved, with measurable impact if possible.',
			'A second accomplishment in one line.',
		],
	},
	{
		role: 'Sergeant, Korean Augmentee to the US Army',
		company: '2ID (2nd Infantry Division)',
		team: 'Office of the Staff Judge Advocate',
		period: '06/2023 – 12/2024',
		bullets: [
			'What you built or improved, with measurable impact if possible.',
			'A second accomplishment in one line.',
		],
	},
	{
		role: 'Course Staff - Data 8 (Foundations of Data Science)',
		company: 'UC Berkeley CDSS',
		period: '01/2023 – 05/2023',
		bullets: [
			'What you built or improved, with measurable impact if possible.',
			'A second accomplishment in one line.',
		],
	},
	{
		role: 'Summer Analyst',
		company: 'Lazard',
		period: '05/2022 – 07/2022',
		bullets: [
			'What you built or improved, with measurable impact if possible.',
			'A second accomplishment in one line.',
		],
	},
];
