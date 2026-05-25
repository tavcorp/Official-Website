import express from "express";
const router = express.Router();

import subscribeUpdate from "../controllers/subscribeUpdate.controller.js";

router.post("/sub-update", subscribeUpdate);

export default router;