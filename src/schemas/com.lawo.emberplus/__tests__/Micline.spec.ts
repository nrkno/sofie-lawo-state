import { Micline } from './../Micline'

test('Schema for Micline', () => {
	let schema = new Micline()
	expect(schema.IDENTIFIER).toBe('com.lawo.emberplus.micline.1.0')
})
