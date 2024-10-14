export enum RoleType {
	MASTER = 'MASTER',
}

export class RoleGroup {
	static readonly MASTER: RoleType[] = [RoleType.MASTER];
}
