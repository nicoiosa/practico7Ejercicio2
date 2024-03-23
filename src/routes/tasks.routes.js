import { Router } from "express";

const router = Router();

router.route("/tasks").get().post();
router.route("/tasks/:id").delete();

export default router;
