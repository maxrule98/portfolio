const express = require("express");

// const { getProjects, getProject } = require("../helpers/api-calls");

const uiRoutes = (app) => {
	const ui = express.Router();

	ui.get("/hello", async (req, res) => {
		res.render("home.html", {
			locals: {
				title: "Home",
				message: "Hello World 123",
			},
		});
	});

	ui.get("/projects", async (req, res) => {
		const response = await fetch("http://localhost:3000/api/v1/projects");
		const data = await response.json();
		res.render("projects.html", {
			locals: {
				title: "Projects",
				message: "Hello World 123",
				projects: data,
			},
		});
	});

	ui.get("/project/:id", async (req, res) => {
		const { id } = req.params;
		const response = await fetch(`http://localhost:3000/api/v1/projects/${id}`);
		const data = await response.json();
		res.render("project.html", {
			locals: {
				title: "Project" + id,
				message: "Hello World 123",
				project: data,
			},
		});
	});

	app.use("/", ui);
};

module.exports = uiRoutes;
