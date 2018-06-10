import {Linein} from './../Linein'

test('Schema for Lineine', () => {
	let schema = new Linein()
	expect(schema.IDENTIFIER).toBe('com.lawo.emberplus.linein.1.0')
})
