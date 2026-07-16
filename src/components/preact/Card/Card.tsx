import { useEffect, useState, useMemo } from "preact/hooks";
import PasswordGenerated from "@/components/preact/PasswordGenerated/PasswordGenerated";
import LengthPicker from "@/components/preact/LengthPicker/LengthPicker";
import CharactersPicker, { type CharactersTypes } from "@/components/preact/CharactersType/CharactersType";
import { generatePassword } from "@/tools/tools";
import "@/styles/colors.css";
import "./Card.css";

const calculateStrength = (password: string) => {
	let score = 0;
	if (!password) return 0;
	if (password.length > 8) score += 1;
	if (password.length > 12) score += 1;
	if (/[A-Z]/.test(password)) score += 1;
	if (/[0-9]/.test(password)) score += 1;
	if (/[^A-Za-z0-9]/.test(password)) score += 1;
	return Math.min(score, 4);
};

const getStrengthLabel = (score: number) => {
	switch(score) {
		case 0: return "Too Weak";
		case 1: return "Weak";
		case 2: return "Fair";
		case 3: return "Strong";
		case 4: return "Very Strong";
		default: return "";
	}
};

export default function Card() {
	const [password, setPassword] = useState<string>("");
	const [length, setLength] = useState<number>(12);
	const [charactersTypes, setCharactersTypes] = useState<CharactersTypes>({
		hasLowercase: true,
		hasUppercase: true,
		hasNumbers: true,
		hasSymbols: true,
	});

	const handleGeneratePassword = () => {
		const password = generatePassword(length, charactersTypes);
		setPassword(password);
	};

	useEffect(() => {
		handleGeneratePassword();
	}, [length, charactersTypes]);

	const strengthScore = useMemo(() => calculateStrength(password), [password]);

	return (
		<section className="card">
			<PasswordGenerated generatedPassword={password} handleGeneratePassword={handleGeneratePassword} />

			<div className="strength-indicator">
				<div className="strength-header">
					<span>Strength</span>
					<span className="strength-label" data-score={strengthScore}>{getStrengthLabel(strengthScore)}</span>
				</div>
				<div className="strength-bars">
					{[1, 2, 3, 4].map((level) => (
						<div key={level} className={`strength-bar ${level <= strengthScore ? 'active' : ''}`} data-score={level <= strengthScore ? strengthScore : 0}></div>
					))}
				</div>
			</div>

			<LengthPicker length={length} setLength={setLength} />

			<CharactersPicker charactersTypes={charactersTypes} setCharactersTypes={setCharactersTypes} />
		</section>
	);
}
