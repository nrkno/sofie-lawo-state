import {AbstractSchema, Schema} from './../Schema'
test('Schema', () => {
	let schema = new AbstractSchema()

	expect(schema).toHaveProperty('IDENTIFIER')
	expect(schema.IDENTIFIER).toBe('')
})
