const express = require("express");
const es6Renderer = require("express-es6-template-engine");
const app = express();
const port = process.env.port || 3000;

const apiRoutes = require("./server/routes/api-endpoints");
const uiRoutes = require("./server/routes/ui-endpoints");

(() => {
	app.engine("html", es6Renderer);
	app.set("views", "src/client");
	app.set("view engine", "html");
	app.use("/", express.static("src/client"));
	app.use("/node_modules", express.static("node_modules")); //node_modules

	uiRoutes(app);
	apiRoutes(app);

	app.listen(port, () => {
		console.table({
			Server: "Running",
			Port: port,
			URL: `http://localhost:${port}`,
			API: `http://localhost:${port}/api/v1/`,
			Timestamp: new Date().getTime(),
		});
	});
	process.on("SIGINT", () => {
		console.table({
			Server: "Stopped",
			Port: port,
			URL: `http://localhost:${port}`,
			API: `http://localhost:${port}/api/v1/`,
			Timestamp: new Date().getTime(),
		});
		process.exit(0);
	});
	process.on("SIGTERM", () => {
		console.table({
			Server: "Stopped",
			Port: port,
			URL: `http://localhost:${port}`,
			Timestamp: new Date().getTime(),
		});
		process.exit(0);
	});
})();
