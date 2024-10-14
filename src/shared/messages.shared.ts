export function messageFactory(message: string, msgParams?: string[]): string {
	let newMsg = message;
	if (msgParams && msgParams.length > 0) {
		msgParams.forEach((val, key) => {
			newMsg = newMsg.split(`ARG${key}`).join(val?.toString());
		});
	}
	return newMsg;
}

export const enum messages {
	//ARG0,ARG1 ... ARGn should be in sequence.

	//Success messages : Start with Sn
	S1 = 'Template api on port: ARG0',
	S2 = 'Template api on port: ARG0, Database is up & running',
	S3 = 'Connected to POSTGRESQL server!',
	S4 = 'Success',
	S5 = 'successfully Connected to Event Hub',

	//Warning messages : Start with Wn
	W1 = 'Please provide a valid ARG0!',
	W2 = 'ARG0 should not be empty!',
	W3 = 'No record(s) found!',
	W4 = `We could not find an account associated with the provided information. Please check the information you have provided and try again!`,
	W5 = `Login failed - Username or password you entered did not match our records. Please double-check your login credentials to ensure they are entered correctly!`,
	W6 = `Login failed - The username or password you entered is not a valid base64 string!`,
	W7 = `Please provide a valid password in the request headers, e.g., Password: abc@123!`,

	//Error messages : Start with En
	E1 = 'Data sharing service start failed! :: ARG0',
	E2 = 'Application or database is not running properly',
	E3 = 'Oops! An error occurred while processing your request',
	E4 = 'Unauthorized request!',
	E5 = 'An error occurred while establishing connection to PG SQL server! (ERROR :: ARG0)',
	E6 = 'PGSQL database connection disconnected through app termination!',
	E7 = 'Error closing SQL database connection! (ERROR :: ARG0)!',
	E8 = 'We are sorry, but you do not have access to this resource [ARG0]!',
	E9 = 'ARG0 "ARG1" not supported. Please use ARG2'
}
