import "@/styles/titles.css";
import "./LengthPicker.css";

interface LengthPickerProps {
	length: number;
	setLength: (length: number) => void;
	allowExtendedLength?: boolean;
}

export default function LengthPicker({ length, setLength, allowExtendedLength = false }: LengthPickerProps) {
	const min = 1;
	const max = allowExtendedLength ? 128 : 50;
	const step = 1;

	const updateLength = (e: any) => {
		let newLength = e?.target?.value ?? 1;
		if (newLength > max) newLength = max;
		setLength(newLength);
	};

	return (
		<article className="length-picker">
			<label className="article-title" htmlFor="length">
				Length
			</label>

			<input 
				type="range" 
				min={min} max={max} step={step} 
				value={length} onInput={updateLength} 
				style={{ backgroundSize: `${((length - min) / (max - min)) * 100}% 100%` }}
			/>

			<input id="length" type="number" min={min} max={max} step={step} value={length} onChange={updateLength} />
		</article>
	);
}
