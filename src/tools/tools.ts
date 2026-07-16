import type { CharactersTypes } from "@/components/preact/CharactersType/CharactersType";

export interface AdvancedOptions {
	excludeSimilar: boolean;
	excludeAmbiguous: boolean;
	allowExtendedLength: boolean;
}

const LOWER_CASE_CHARACTERS = "abcdefghijklmnopqrstuvwxyz";
const UPPER_CASE_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS_CHARACTERS = "0123456789";
const SYMBOLS_CHARACTERS = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

const SIMILAR_CHARACTERS = "il1Lo0O";
const AMBIGUOUS_CHARACTERS = "{}[]()/\\'\"`~,;:.<>";

export function generatePassword(
	length: number, 
	charactersTypes: CharactersTypes, 
	advancedOptions?: AdvancedOptions
) {
	const { hasLowercase, hasUppercase, hasNumbers, hasSymbols } = charactersTypes;
	const { excludeSimilar, excludeAmbiguous } = advancedOptions || { excludeSimilar: false, excludeAmbiguous: false };
	
	let charPool = "";
	if (hasLowercase) charPool += LOWER_CASE_CHARACTERS;
	if (hasUppercase) charPool += UPPER_CASE_CHARACTERS;
	if (hasNumbers) charPool += NUMBERS_CHARACTERS;
	if (hasSymbols) charPool += SYMBOLS_CHARACTERS;

	let characters = charPool.split('');

	if (excludeSimilar) {
		const similarSet = new Set(SIMILAR_CHARACTERS.split(''));
		characters = characters.filter(c => !similarSet.has(c));
	}

	if (excludeAmbiguous) {
		const ambiguousSet = new Set(AMBIGUOUS_CHARACTERS.split(''));
		characters = characters.filter(c => !ambiguousSet.has(c));
	}

	if (characters.length === 0) return "";

	let password = "";

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		password += characters[randomIndex];
	}

	return password;
}
