import "@/styles/titles.css";
import "./CharactersType.css";
import { useState } from "preact/hooks";

export interface CharactersTypes {
	hasLowercase: boolean;
	hasUppercase: boolean;
	hasNumbers: boolean;
	hasSymbols: boolean;
}

interface CharactersTypeProps {
	charactersTypes: CharactersTypes;
	setCharactersTypes: (characters: CharactersTypes) => void;
}

export default function CharactersType({ charactersTypes, setCharactersTypes }: CharactersTypeProps) {
	const charactersTypesKeys = Object.keys(charactersTypes) as (keyof CharactersTypes)[];
	const [canUncheckCharactersTypes, setCanUncheckCharactersTypes] = useState({
		hasLowercase: true,
		hasUppercase: true,
		hasNumbers: true,
		hasSymbols: true,
	});

	const updateCharactersTypes = (key: keyof CharactersTypes, e: any) => {
		if (!key || !charactersTypesKeys.includes(key)) return;

		if (!canUncheckCharactersTypes[key]) {
			e.target.checked = true;
			return;
		}

		const value = e?.target?.checked ?? false;
		charactersTypes[key] = value;
		updateCanUncheckCharactersTypes();

		setCharactersTypes({ ...charactersTypes });
	};

	const updateCanUncheckCharactersTypes = () => {
		// Si es el único true, que no pueda ser unchekeado
		const valuesSelected = Object.values(charactersTypes).filter((v) => v);

		if (valuesSelected.length < 2) {
			for (let i = 0; i < charactersTypesKeys.length; i++) {
				const key = charactersTypesKeys[i];

				if (charactersTypes[key]) {
					canUncheckCharactersTypes[key] = false;
				}
			}
		} else {
			// Reset
			canUncheckCharactersTypes.hasLowercase = true;
			canUncheckCharactersTypes.hasUppercase = true;
			canUncheckCharactersTypes.hasNumbers = true;
			canUncheckCharactersTypes.hasSymbols = true;
		}
		setCanUncheckCharactersTypes({ ...canUncheckCharactersTypes });
	};

	return (
		<article className="characters-type">
			<span className="article-title">Characters</span>

			<div className="grid">
				<div className="item">
					<input
						type="checkbox"
						id="hasUppercase"
						name="hasUppercase"
						checked={charactersTypes.hasUppercase}
						onChange={(e) => updateCharactersTypes("hasUppercase", e)}
						aria-label="Include uppercase letters"
					/>
					<label htmlFor="hasUppercase">ABC</label>
				</div>

				<div className="item">
					<input
						type="checkbox"
						id="hasLowercase"
						name="hasLowercase"
						checked={charactersTypes.hasLowercase}
						onChange={(e) => updateCharactersTypes("hasLowercase", e)}
						aria-label="Include lowercase letters"
					/>
					<label htmlFor="hasLowercase">abc</label>
				</div>

				<div className="item">
					<input
						type="checkbox"
						id="hasNumbers"
						name="hasNumbers"
						checked={charactersTypes.hasNumbers}
						onChange={(e) => updateCharactersTypes("hasNumbers", e)}
						aria-label="Include numbers"
					/>
					<label htmlFor="hasNumbers">123</label>
				</div>

				<div className="item">
					<input
						type="checkbox"
						id="hasSymbols"
						name="hasSymbols"
						checked={charactersTypes.hasSymbols}
						onChange={(e) => updateCharactersTypes("hasSymbols", e)}
						aria-label="Include symbols"
					/>
					<label htmlFor="hasSymbols">#$&</label>
				</div>
			</div>
		</article>
	);
}
