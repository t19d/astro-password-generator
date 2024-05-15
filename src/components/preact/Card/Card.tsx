import { useEffect, useState } from "preact/hooks";
import PasswordGenerated from "@/components/preact/PasswordGenerated/PasswordGenerated";
import "@/styles/colors.css";
import "./Card.css";

export default function Card() {
	const [password, setPassword] = useState("");

	const handleGeneratePassword = () => {
		setPassword(Math.random().toString(36).substring(2, 15));
	};

	useEffect(() => {
		handleGeneratePassword();
	}, []);

	return (
		<section className="card">
			<PasswordGenerated generatedPassword={password} handleGeneratePassword={handleGeneratePassword} />
		</section>
	);
}
