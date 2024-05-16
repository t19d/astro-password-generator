import "@/styles/titles.css";
import "./CharactersType.css";

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
	const updateCharactersTypes = (key: "hasLowercase" | "hasUppercase" | "hasNumbers" | "hasSymbols", e: any) => {
		if (!key || !Object.keys(charactersTypes).includes(key)) return;

		const value = e?.target?.checked ?? false;
		charactersTypes[key] = value;
		setCharactersTypes({ ...charactersTypes });
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
					/>
					<label htmlFor="hasSymbols">#$&</label>
				</div>
			</div>
		</article>
	);
}
