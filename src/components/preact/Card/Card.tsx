import { useEffect, useState } from "preact/hooks";
import PasswordGenerated from "@/components/preact/PasswordGenerated/PasswordGenerated";
import LengthPicker from "@/components/preact/LengthPicker/LengthPicker";
import CharactersPicker, { type CharactersTypes } from "@/components/preact/CharactersType/CharactersType";
import { generatePassword } from "@/tools/tools";
import "@/styles/colors.css";
import "./Card.css";

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

	return (
		<section className="card">
			<PasswordGenerated generatedPassword={password} handleGeneratePassword={handleGeneratePassword} />

			<LengthPicker length={length} setLength={setLength} />

			<CharactersPicker charactersTypes={charactersTypes} setCharactersTypes={setCharactersTypes} />
		</section>
	);
}
