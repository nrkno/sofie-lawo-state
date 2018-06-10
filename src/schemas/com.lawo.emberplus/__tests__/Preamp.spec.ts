import {Preamp} from './../Preamp'

test('Schema for Preamp', () => {
	let schema = new Preamp()
	expect(schema.IDENTIFIER).toBe('com.lawo.emberplus.microphone.preamp.1.1')
})
