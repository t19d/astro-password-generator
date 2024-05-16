import type { CharactersTypes } from "@/components/preact/CharactersType/CharactersType";

const LOWER_CASE_CHARACTERS = "abcdefghijklmnopqrstuvwxyz";
const UPPER_CASE_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS_CHARACTERS = "0123456789";
const SYMBOLS_CHARACTERS = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

export function generatePassword(length: number, charactersTypes: CharactersTypes) {
	const { hasLowercase, hasUppercase, hasNumbers, hasSymbols } = charactersTypes;
	const characters: string[] = [];
	if (hasLowercase) characters.push(...LOWER_CASE_CHARACTERS);
	if (hasUppercase) characters.push(...UPPER_CASE_CHARACTERS);
	if (hasNumbers) characters.push(...NUMBERS_CHARACTERS);
	if (hasSymbols) characters.push(...SYMBOLS_CHARACTERS);

	if (characters.length === 0) return "";

	let password = "";

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		password += characters[randomIndex];
	}

	return password;
}
