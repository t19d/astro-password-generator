import "@/styles/colors.css";
import "./LengthPicker.css";

interface LengthPickerProps {
	length: number;
	setLength: (length: number) => void;
}

export default function LengthPicker({ length, setLength }: LengthPickerProps) {
	const min = 1;
	const max = 50;
	const step = 1;

	const updateLength = (e: any) => {
		const length = e?.target?.value ?? 1;
		setLength(length);
	};

	return (
		<article className="length-picker">
			<label htmlFor="length">Length</label>

			<input type="range" min={min} max={max} step={step} value={length} onInput={updateLength} />

			<input id="length" type="number" min={min} max={max} step={step} value={length} onChange={updateLength} />
		</article>
	);
}
