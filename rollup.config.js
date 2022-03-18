import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
export default [{
	input: 'src/index.ts',
	output: [{
		file: './dist/index.umd.js', // umd
		format: 'umd',
		name: 'ZUtils',
	},{
		file: './dist/index.esm.js', // es6模块
		format: 'es',
	},{
		file: './dist/index.cjs.js', // commonjs
		format: 'cjs',
	}],
	plugins: [
		resolve(), // 查找和打包node_modules中的第三方模块
		commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
		typescript() // 解析TypeScript
	]
}]