interface IBigNumberMaterial {
	numbers: number[]
	sign: 1 | -1
}
const zero: IBigNumberMaterial = {numbers: [0], sign: 1};
const nan: IBigNumberMaterial = {numbers: [], sign: 1};

/**
 * 字符串格式化成大整数
 * @param number
 */
export function formatStringToBigNumber(number: string): IBigNumberMaterial {
	const res: IBigNumberMaterial = {sign: 1, numbers: []};
	if (number[0] === '+' || number[0] === '-') {
		res.sign = number[0] === '+' ? 1 : -1;
		number = number.substring(1);
	}
	for (let i = 0; i < number.length; i++) {
		const bit = Number(number[i]);
		if (Number.isNaN(bit)) {
			return res;
		} else {
			res.numbers.push(bit);
		}
	}
	return res;
}

/**
 * 数字格式化成大整数
 * @param number
 */
export function formatNumberToBigNumber(number: number): IBigNumberMaterial {
	if (Number.isFinite(number)) {
		const res: IBigNumberMaterial = {sign: 1, numbers: []};
		if (!Number.isInteger(number)) number = number > 0 ? Math.floor(number) : Math.ceil(number);
		res.sign = number >= 0 ? 1 : -1;
		number = Math.abs(number);
		while (number >= 0) {
			const bit = number % 10;
			res.numbers.unshift(bit);
			number = Math.floor(number /10);
		}
		return res;
	} else {
		return nan;
	}
}