import app from "./app";
import { checkDataBaseConnection } from "./config/db";
import { env } from "./config/env";
import logger from "./config/logger";

async function startServer() {
	try {
		const PORT = env.PORT || 5000;

		await checkDataBaseConnection();

		app.listen(PORT, () => {
			logger.info(`LMS Backend server running on port: http://locathost:${PORT}`);
		});
	} catch (error) {
		logger.error("🛑 Failed to start server due to database connection error:", error);
		process.exit(1);
	}
}

startServer();
