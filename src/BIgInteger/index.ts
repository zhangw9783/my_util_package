import {formatNumberToBigNumber, formatStringToBigNumber} from './format';

interface IBigIntegerOptions {
	readonly?: boolean
}

export class BigInteger {
	private _number: number[] = []
	private _sign: number = 1
	private _readonly: boolean = false
	private _isZero: boolean = false
	static ZERO = new BigInteger(0, { readonly: true })
	/**
	 * 格式化数据为十进制存储的方式
	 * @param number
	 * @param option
	 */
	constructor(number: string | number, option?: IBigIntegerOptions) {
		if (typeof number === 'string') {
			const material = formatStringToBigNumber(number); 
			this._number = material.numbers;
			this._sign = material.sign;
		} else if (typeof number === 'number') {
			const material = formatNumberToBigNumber(number);
			this._number = material.numbers;
			this._sign = material.sign;
		}
		if (option?.readonly) {
			Object.freeze(this._number);
		}
		if (number === 0) {
			this._isZero = true;
		}
		this._readonly = option?.readonly || false;
	}
	public value(): string {
		if (this._isZero) return '0';
		return 'NaN';
	}
}