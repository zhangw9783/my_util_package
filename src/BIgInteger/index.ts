interface IBigIntegerOptions {
	readonly?: boolean
}

export class BigInteger {
	private _number: number[] = []
	private _sign: string = '+'
	static ZERO = new BigInteger(0, { readonly: true })
	constructor(number: string | number, option?: IBigIntegerOptions) {
	}
}