import Chance from "chance";
const change = new Chance();

export function getRandomName(){
	return change.name();
}

export function getRandomEmail() {
	return change.email();
}

export function getRandomBirthday() {
	return change.birthday();
}