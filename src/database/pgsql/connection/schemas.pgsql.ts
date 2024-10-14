export enum Schema {
	Security = 'Security',
	Readonly = 'Readonly'
}

export class SchemaGrp {
	static readonly ALL_SCHEMAS: Schema[] = [Schema.Security, Schema.Readonly];
}
