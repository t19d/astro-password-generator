import { useState } from "preact/hooks";
import Copy from "@/components/preact/icons/Copy";
import Refresh from "@/components/preact/icons/Refresh";
import "@/styles/buttons.css";
import "./PasswordGenerated.css";

interface PasswordGeneratedProps {
	generatedPassword: string;
	handleGeneratePassword: () => void;
}

export default function PasswordGenerated({ generatedPassword, handleGeneratePassword }: PasswordGeneratedProps) {
	const [copied, setCopied] = useState(false);
	const [isRotating, setIsRotating] = useState(false);

	const handleCopy = async () => {
		await navigator.clipboard.writeText(generatedPassword);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const onRefresh = () => {
		setIsRotating(true);
		handleGeneratePassword();
		setTimeout(() => setIsRotating(false), 300);
	};

	return (
		<article className="password-generated">
			<span className="password">{generatedPassword}</span>

			<div className="actions">
				<button className={`btn refresh-btn ${isRotating ? 'rotate' : ''}`} onClick={onRefresh} aria-label="Generate new password">
					<Refresh />
				</button>

				<button className={`btn copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy} aria-label="Copy password to clipboard">
					<Copy />
					{copied && <span className="toast">Copied!</span>}
				</button>
			</div>
		</article>
	);
}
