interface IBigNumberMaterial {
	numbers: number[]
	sign: number
}
const zero = {numbers: [0], sign: 1};
const nan = {numbers: [], sign: 1};
export function formatStringToBigNumber(number: string): IBigNumberMaterial {
	const res: IBigNumberMaterial = {sign: 1, numbers: []};
	if (number[0] === '+' || number[0] === '-') {
		res.sign = number[0] === '+' ? 1 : -1;
	}
	return zero;
}

export function formatNumberToBigNumber(number: number): IBigNumberMaterial {
	if (Number.isFinite(number)) {
		if (!Number.isInteger(number)) number = Math.floor(number);
		return zero;
	} else {
		return zero;
	}
}