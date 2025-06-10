import { memo } from 'react';

type ChordNameProps = {
	chordName: string;
};

const ChordName = memo(function ChordName({ chordName }: ChordNameProps) {
	const parts = chordName.split(/([♭♯]|\d+)/).filter(Boolean);

	return (
		<div className='ChordName col-span-2 border-r border-black font-bold text-md text-center sm:text-lg'>
			{parts.map((part, index) => {
				if (part === '♭') {
					return (
						<span key={index} className='useFlat'>
							{part}
						</span>
					);
				}
				if (part === '♯') {
					return (
						<span key={index} className='useSharp'>
							{part}
						</span>
					);
				}
				if (/^\d+$/.test(part)) {
					return (
						<span key={index} className='number'>
							{part}
						</span>
					);
				}
				return <span key={index}>{part}</span>;
			})}
		</div>
	);
});

export default ChordName;
