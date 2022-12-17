import mysql from 'serverless-mysql';

const db = mysql({
	config: {
		host: process.env.MYSQL_HOST,
		port: process.env.MYSQL_PORT,
		database: process.env.MYSQL_NAME,
		user: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASS
	}
});

export default async function excuteQuery({ query, values }) {
	try {
        console.log(`Executing ${query}`);
        console.log(`Hostname: ${process.env.MYSQL_HOST}`);

		const results = await db.query(query, values);
		await db.end();
		return results;
	} catch (error) {
		return { error };
	}
}