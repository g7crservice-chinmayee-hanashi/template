export class AppConfigService {
	private readonly envConfig: { [key: string]: any } = {};
	constructor() {
		/*app configurations*/
		this.envConfig.app = {
			port: parseInt(process.env.APP_PORT, 10) || 8080
		};

		/*database*/
		this.envConfig.db = {
			pgsql: {
				dialect: 'postgres',
				database: process.env.PGSQL_DATABASE,
				username: process.env.PGSQL_USERNAME,
				password: process.env.PGSQL_PASSWORD,
				host: process.env.PGSQL_SERVER,
				port: Number(process.env.PGSQL_PORT),
				trustServerCertificate: Boolean(process.env.PGSQL_TRUST_SERVER_CERTIFICATE),
				autoLoadModels: true,   // Automatically load Sequelize models
				synchronize: true,  
				dialectOptions: {
					ssl: {
					  require: true, // Forces SSL connection
					  rejectUnauthorized: false, // Ignore self-signed certificate errors
					},
				  },
			}
		};

		/*blob configurations*/
		this.envConfig.blobStorage = {
			blobAccountName: process.env.BLOB_AC_NAME,
			blobAccountKey: process.env.BLOB_AC_KEY,
			blobAccountConnectionString: process.env.BLOB_CONNECTION_STRING,
			blobLoggerContainer: process.env.BLOB_LOGGER_CONTAINER,
			logLevel: process.env.LOG_LEVEL
		};

		/*logger*/
		this.envConfig.logger = {
			logLevel: process.env.LOG_LEVEL
		};

		/*Application secretes & token settings*/
		this.envConfig.tokenMetadata = {
			appAtSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
			atExpiresIn: process.env.JWT_ACCESS_TOKEN_EXP_TIMEMIN
		};
	}

	get(key: string): any {
		return this.envConfig[key];
	}
}
