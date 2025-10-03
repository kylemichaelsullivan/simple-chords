export const DISPLAYS_ICONS = ['keyboard', 'guitar', 'banjo', 'ukelele', 'mandolin'] as const;

export const DISPLAYS_TEXTS = ['Piano', 'Guitar', 'Banjo', 'Ukelele', 'Mandolin'] as const;

export type Displays_Icon = (typeof DISPLAYS_ICONS)[number];
export type Displays_Text = (typeof DISPLAYS_TEXTS)[number];

export const DISPLAYS_MAP: Record<Displays_Icon, Displays_Text> = {
	keyboard: 'Piano',
	guitar: 'Guitar',
	banjo: 'Banjo',
	ukelele: 'Ukelele',
	mandolin: 'Mandolin',
};
