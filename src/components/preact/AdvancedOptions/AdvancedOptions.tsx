import type { AdvancedOptions as AdvancedOptionsType } from "@/tools/tools";
import "./AdvancedOptions.css";

interface AdvancedOptionsProps {
	options: AdvancedOptionsType;
	setOptions: (options: AdvancedOptionsType) => void;
}

export default function AdvancedOptions({ options, setOptions }: AdvancedOptionsProps) {
	const handleToggle = (key: keyof AdvancedOptionsType) => {
		setOptions({
			...options,
			[key]: !options[key]
		});
	};

	return (
		<div className="advanced-options-container">
			<details className="advanced-details">
				<summary>Advanced Options</summary>
				<div className="advanced-content">
					<label className="advanced-toggle">
						<input 
							type="checkbox" 
							checked={options.excludeSimilar} 
							onChange={() => handleToggle('excludeSimilar')} 
						/>
						<span className="toggle-slider"></span>
						<span className="toggle-label">Exclude Similar Characters <small>(i, l, 1, L, o, 0, O)</small></span>
					</label>

					<label className="advanced-toggle">
						<input 
							type="checkbox" 
							checked={options.excludeAmbiguous} 
							onChange={() => handleToggle('excludeAmbiguous')} 
						/>
						<span className="toggle-slider"></span>
						<span className="toggle-label">Exclude Ambiguous Characters <small>{"{ } [ ] ( ) / \\ ' \" ` ~ , ; : . < >"}</small></span>
					</label>

					<label className="advanced-toggle">
						<input 
							type="checkbox" 
							checked={options.allowExtendedLength} 
							onChange={() => handleToggle('allowExtendedLength')} 
						/>
						<span className="toggle-slider"></span>
						<span className="toggle-label">Extended Password Length <small>Allow generating up to 128 characters</small></span>
					</label>
				</div>
			</details>
		</div>
	);
}
