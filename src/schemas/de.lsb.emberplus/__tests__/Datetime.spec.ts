import { Datetime } from './../Datetime'

test('Schema for Datetime', () => {
	let schema = new Datetime()
	expect(schema.IDENTIFIER).toBe('de.l-s-b.emberplus.datetime')
})
