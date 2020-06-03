import { Schema, AbstractSchema } from './../Schema'

export namespace com.lawo.emberplus {

	@Schema.identifier('de.l-s-b.emberplus.identity')
	export class Identity extends AbstractSchema {

	}
}

export const Identity = com.lawo.emberplus.Identity
