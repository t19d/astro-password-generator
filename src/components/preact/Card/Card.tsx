import { useEffect, useState } from "preact/hooks";
import PasswordGenerated from "@/components/preact/PasswordGenerated/PasswordGenerated";
import LengthPicker from "../LengthPicker/LengthPicker";

import "@/styles/colors.css";
import "./Card.css";

export default function Card() {
	const [password, setPassword] = useState("");
	const [length, setLength] = useState(12);

	const handleGeneratePassword = () => {
		let password = "";

		for (let i = 0; i < length; i++) {
			password += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
		}

		setPassword(password);
	};

	useEffect(() => {
		handleGeneratePassword();
	}, [length]);

	return (
		<section className="card">
			<PasswordGenerated generatedPassword={password} handleGeneratePassword={handleGeneratePassword} />

			<LengthPicker length={length} setLength={setLength} />

			<button className="btn" onClick={handleGeneratePassword}>
				Generate Password
			</button>
		</section>
	);
}
