import {BigInteger} from '../../src';

describe('测试BigInteger的value方法', () => {
	test('测试0值', () => {
		const zero = BigInteger.ZERO;
		expect(zero.value()).toBe('0');
	});
	test('测试大于0值', () => {
		const num1 = new BigInteger(123);
		expect(num1.value()).toBe('123');
		const num2 = new BigInteger('3456');
		expect(num2.value()).toBe('3456');
	});
	test('测试小于0值', () => {
		const num1 = new BigInteger(-123);
		expect(num1.value()).toBe('-123');
		const num2 = new BigInteger('-3456');
		expect(num2.value()).toBe('-3456');
	});
	test('测试非正常值', () => {
		const num1 = new BigInteger(NaN);
		expect(num1.value()).toBe('NaN');
		const num2 = new BigInteger(Infinity);
		expect(num2.value()).toBe('NaN');
		const num3 = new BigInteger('asdasd');
		expect(num3.value()).toBe('NaN');
		const num4 = new BigInteger(-Infinity);
		expect(num4.value()).toBe('NaN');
		const num5 = new BigInteger(3.64);
		expect(num5.value()).toBe('3');
		const num6 = new BigInteger(-6.64);
		expect(num6.value()).toBe('-6');
		const num7 = new BigInteger('-6.64');
		expect(num7.value()).toBe('-6');
		const num8 = new BigInteger('3.64');
		expect(num8.value()).toBe('3');
		const num9 = new BigInteger('-a.64');
		expect(num9.value()).toBe('NaN');
	});
});