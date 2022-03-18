interface IBigNumberMaterial {
	numbers: number[]
	sign: number
}
const zero = {numbers: [], sign: 1};
export function formatStringToBigNumber(number: string): IBigNumberMaterial {
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