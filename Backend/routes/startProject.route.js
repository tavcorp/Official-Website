import express from "express";
const router = express.Router();

import { createProjectInquiry } from "../controllers/startProject.controller.js";

router.route("/project-ideas").post(createProjectInquiry);

export default router;

