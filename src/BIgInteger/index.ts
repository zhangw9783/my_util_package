import {formatNumberToBigNumber, formatStringToBigNumber} from './format';

interface IBigIntegerOptions {
	readonly?: boolean
}

export class BigInteger {
	private _number: number[] = [] // 由低位到高位存储
	private _sign: 1 | -1 = 1
	private _readonly: boolean = false
	private _isZero: boolean = false
	static ZERO = new BigInteger(0, { readonly: true })
	/**
	 * 格式化数据为十进制存储的方式
	 * @param number
	 * @param option
	 */
	constructor(number: string | number, option?: IBigIntegerOptions) {
		let material: {numbers: number[], sign: 1 | -1} = {numbers: [], sign: 1};
		if (typeof number === 'string') {
			material = formatStringToBigNumber(number);
		} else if (typeof number === 'number') {
			material = formatNumberToBigNumber(number);
		} else {
			material = formatNumberToBigNumber(0);
		}
		this._number = material.numbers;
		this._sign = material.sign;
		if (option?.readonly) {
			Object.freeze(this._number);
		}
		if (number === 0) {
			this._isZero = true;
		}
		this._readonly = option?.readonly || false;
	}

	/**
	 * 将值转化为字符串
	 */
	public value(): string {
		if (this._isZero) return '0';
		if (this._number.length === 0) return 'NaN';
		let res = this._sign === 1 ? '' : '-';
		res += this._number.join('');
		return res;
	}
}