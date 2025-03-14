const express = require("express");

const apiRoutes = (app) => {
	const api = express.Router();

	api.get("/projects", (req, res) => {
		res.json([
			{
				id: 1,
				name: "Project 1",
				description: "Description 1",
				imgUrl: "https://via.placeholder.com/150",
			},
			{
				id: 2,
				name: "Project 2",
				description: "Description 2",
				imgUrl: "https://via.placeholder.com/150",
			},
			{
				id: 3,
				name: "Project 3",
				description: "Description 3",
				imgUrl: "https://via.placeholder.com/150",
			},
		]);
	});

	api.get("/projects/:id", (req, res) => {
		const { id } = req.params;
		res.json({
			id,
			name: `Project ${id}`,
			description: `Description ${id}`,
			imgUrl: "https://via.placeholder.com/150",
		});
	});

	app.use("/api/v1", api);
};

module.exports = apiRoutes;
