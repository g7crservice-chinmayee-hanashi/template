
const postgresSqlDBModelsProvider = [
	// {
	// 	provide: PgSqlConstants.SECURITY_USERACCOUNTS_MODEL,
	// 	useValue: SecurityUsersAccount
	// },
	
],

models: any = postgresSqlDBModelsProvider.map((providers) => providers.useValue);

export { models, postgresSqlDBModelsProvider };

