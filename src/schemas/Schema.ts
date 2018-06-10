/**
 *
 */
export interface ISchema {
	readonly IDENTIFIER: string
}

/**
 *
 */
export class Schema {
	static identifier (id: string) {
		return (target: Function) => {
			console.log('nå', id)
			Object.defineProperty(target, '_id', {
				get: function () {
					return id
				}
			})
		}
	}
}

/**
 *
 */
@Schema.identifier('')
export class AbstractSchema implements ISchema {

	protected static readonly _id: string

	public get IDENTIFIER (): string {
		return (this.constructor as typeof AbstractSchema)._id
	}
}
