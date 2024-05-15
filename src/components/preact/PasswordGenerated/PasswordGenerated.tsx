import Copy from "@/components/preact/icons/Copy";
import Refresh from "@/components/preact/icons/Refresh";
import "@/styles/buttons.css";
import "./PasswordGenerated.css";

interface PasswordGeneratedProps {
	generatedPassword: string;
	handleGeneratePassword: () => void;
}

export default function PasswordGenerated({ generatedPassword, handleGeneratePassword }: PasswordGeneratedProps) {
	const handleCopy = async () => {
		await navigator.clipboard.writeText(generatedPassword);
	};

	return (
		<article className="password-generated">
			<span className="password">{generatedPassword}</span>

			<button className="btn" onClick={handleGeneratePassword}>
				<Refresh />
			</button>

			<button className="btn" onClick={handleCopy}>
				<Copy />
			</button>
		</article>
	);
}
