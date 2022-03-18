interface IBigNumberMaterial {
	numbers: number[]
	sign: string
}
const zero = {numbers: [], sign: '+'};
export function formatStringToBigNumber(number: string): IBigNumberMaterial {
	return zero
}

export function formatNumberToBigNUmber(number: number): IBigNumberMaterial {
	if (Number.isFinite(number)) {
		return zero
	} else {
		return zero
	}
}