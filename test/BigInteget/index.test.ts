import {BigInteger} from '../../src';

describe('测试BigInteger初始化', () => {
	test('测试0值', () => {
		const zero = BigInteger.ZERO;
		expect(zero.value()).toBe('0');
	});
});