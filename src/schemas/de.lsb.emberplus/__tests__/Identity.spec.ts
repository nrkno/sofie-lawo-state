import { Identity } from './../Identity'

test('Schema for Identity', () => {
	let schema = new Identity()
	expect(schema.IDENTIFIER).toBe('de.l-s-b.emberplus.identity')
})
